require('dotenv').config({ path: '../../.env' });
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const {
  addUserTimestamp,
  validateMessage,
  sanitizer,
  extractTagsFromMessage,
  checkMessageForTags
} = require('../utils/utils');

const Mutation = {
  async addMessage(root, { title, message, author }, context) {
    validateMessage(title, message, author);

    // Is there a user we should connect the message to?
    // Users also has free passage to post without timeframe.
    const user = await context.prisma.user({ username: author });

    // Check if author is inside timeframe and is no user.
    if (!user && context.cookies['last_message']) {
      throw new Error('Hang tight between yo messages, yo. 🥁');
    }

    // Set timestamp for client side calculations.
    const date = Date.now().toString();
    addUserTimestamp('last_message', context);

    // Is no user, and time frame is legit
    if (!user) {
      // Add message anyway without user.
      const newMessageWithoutUser = await context.prisma.createMessage({
        title: sanitizer(title),
        message: sanitizer(message),
        author: sanitizer(author),
        dislikes: 0,
        date
      });
      return newMessageWithoutUser;
    }

    // Otherwise, connect the user and message
    const { id, username } = user;
    const newMessageWithUser = await context.prisma.createMessage({
      title: sanitizer(title),
      message: sanitizer(message),
      dislikes: 0,
      author: username,
      user: { connect: { id } },
      date
    });

    // For now this is only available for signup users.
    // Is there any # (tags) in the new message?
    if (checkMessageForTags().test(message)) {
      extractTagsFromMessage(message).forEach(async tag => {
        // Does tag excist? Update tag by inserting the new message.
        const isTagInUse = await context.prisma.tag({ tag });
        if (isTagInUse) {
          const updatedTag = await context.prisma.updateTag({
            data: {
              messages: { connect: { id: newMessageWithUser.id } }
            },
            where: {
              tag
            }
          });
          return updatedTag;
        }

        // Otherwise create a new tag.
        const messageWithTags = await context.prisma.createTag({
          tag,
          messages: { connect: { id: newMessageWithUser.id } }
        });

        return messageWithTags;
      });
    }

    return newMessageWithUser;
  },

  async dislikeMessage(root, { id }, context) {
    // Querying the message to get number of dislikes.
    const message = await context.prisma.message({ id });

    // Is message already removed?
    if (!message) throw new Error('Message does not exist.');

    // Otherwise get dislikes.
    const { dislikes } = message;

    // If reached dislike count
    if (dislikes >= 5) {
      // Remove message.
      const deletedMessage = await context.prisma.deleteMessage({ id });
      return deletedMessage;
    }

    // Otherwise set new dislike count.
    const dislike = await context.prisma.updateMessage({
      data: {
        dislikes: dislikes + 1
      },
      where: {
        id
      }
    });

    // Return the updated message.
    return dislike;
  },

  async deleteMessage(root, { id }, context) {
    const deletedMessage = await context.prisma.deleteMessage({ id });
    return deletedMessage;
  },

  async commentMessage(root, { id, author, comment }, context, info) {
    // Query messages with provided id.
    const message = await context.prisma.message({ id });
    // Does message still exist?
    if (!message) throw new Error('No message found');

    if (context.cookies['last_comment']) {
      throw new Error('Hang tight between yo comments, yo. 🥁');
    }

    // Update message with provided comment and author
    const createdComment = await context.prisma.createComment({
      comment,
      author,
      date: Date.now().toString(),
      dislikes: 0,
      message: { connect: { id } }
    });

    // Add comment cookie.
    addUserTimestamp('last_comment', context);
    return createdComment;
  },

  async signup(root, args, context) {
    // Is the user unique? ie. does the user exist
    const userWithUsername = await context.prisma.user({
      username: args.username
    });
    if (userWithUsername) {
      throw new Error(
        `User with the username ${userWithUsername.username} already exist.`
      );
    }

    const userWithemail = await context.prisma.user({ email: args.email });
    if (userWithemail) {
      throw new Error(`User with email ${userWithemail.email} already exist.`);
    }

    // TODO:
    // Are all fields valid? Email, password and username

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(args.email)) {
      throw new Error('Not a valid email.');
    }

    // Hash passwordf
    const password = await bcrypt.hash(args.password, 10);

    // Create user.
    const user = await context.prisma.createUser({
      email: args.email.toLowerCase(),
      password,
      username: args.username.toLowerCase(),
      firstname: args.firstname,
      lastname: args.lastname
    });

    const token = jwt.sign(
      {
        user: {
          id: user.id
        }
      },
      process.env.APP_SECRET
      // { expiresIn: '1d' }
    );

    // Add JWT to response
    context.res.cookie('userToken', token, {
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year.
      // httpOnly: true
    });

    return user;
  },
  async signin(root, args, context) {
    // Check if user exist
    const user = await context.prisma.user({ username: args.username });
    if (!user) {
      return new Error('No such user. :(');
    }

    // Match password
    const isMatchedPassword = await bcrypt.compare(
      args.password,
      user.password
    );
    if (!isMatchedPassword) {
      return new Error('Wrong password. :(');
    }

    // Genereataetrrre jwt token
    const token = jwt.sign(
      {
        user: {
          id: user.id
        }
      },
      process.env.APP_SECRET
      // { expiresIn: '1d' }
    );

    // Add JWT to response
    context.res.cookie('userToken', token, {
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year.
      // httpOnly: true
    });

    return user;
  },

  signout(root, args, context) {
    context.res.clearCookie('userToken');
    return { success: 'Successfully logged out.' };
  },

  async removeUser(root, { username, password }, context) {
    // Check if user is signed in.
    if (!context.req.user) return null;
    const user = await context.prisma.user({ username });

    // Check if signed in user is the same as request delete user.
    const isUserMatch = user.id === context.req.user.id;
    if (!isUserMatch) {
      throw new Error('You cannot delete someone elses account...');
    }
    // Check if correct password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new Error('Wrong password :(');
    }

    // Remove related messages
    await context.prisma.deleteManyMessages({
      user: {
        id: user.id
      }
    });
    // TODO: and remove comments

    // Remove and sign out.
    const userToRemove = await context.prisma.deleteUser({ username });
    context.res.clearCookie('userToken');
    return userToRemove;
  },

  async updateUser(
    root,
    { firstname, lastname, email, password, newPassword },
    context
  ) {
    if (!context.req.user) return null;
    const user = await context.prisma.user({ id: context.req.user.id });

    const isUserMatch = user.id === context.req.user.id;
    if (!isUserMatch) {
      throw new Error('You cannot delete someone elses account...');
    }
    // Check if correct password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new Error('Wrong password :(');
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      throw new Error('Not a valid email.');
    }

    if (newPassword) {
      const newCryptedPassword = await bcrypt.hash(newPassword, 10);
      return await context.prisma.updateUser({
        data: {
          firstname,
          lastname,
          email,
          password: newCryptedPassword
        },
        where: {
          id: user.id
        }
      });
    }

    const updatedUser = await context.prisma.updateUser({
      data: {
        firstname,
        lastname,
        email
      },
      where: {
        id: user.id
      }
    });

    return updatedUser;
  }
};

module.exports = Mutation;
