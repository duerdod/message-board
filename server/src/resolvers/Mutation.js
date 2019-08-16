require('dotenv').config({ path: '../../.env' });
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const {
  addUserTimestamp,
  validateMessage,
  sanitizer
} = require('../utils/utils');

const Mutation = {
  async addMessage(root, { title, message, author }, context) {
    validateMessage(title, message, author);
    // Check if user is inside timeframe.
    if (context.cookies['last_message']) {
      throw new Error('Hang tight between yo messages, yo. 🥁');
    }

    // Set timestamp for client side calculations.
    // Rewrite to use a custom scalar from graphql schema.
    const date = Date.now().toString();

    // Add message and run text through the "sanitizer"...
    const newMessage = await context.prisma.createMessage({
      title: sanitizer(title),
      message: sanitizer(message),
      author: sanitizer(author),
      dislikes: 0,
      date
    });

    // Add / update timestamp cookie.
    addUserTimestamp(context);

    return newMessage;
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

    // Update message with provided comment and author
    const createdComment = await context.prisma.createComment({
      comment,
      author,
      date: Date.now().toString(),
      dislikes: 0,
      message: { connect: { id } }
    });

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

    // Hash passwordf
    const password = await bcrypt.hash(args.password, 10);

    // Create user.
    const user = context.prisma.createUser({
      email: args.email.toLowerCase(),
      password,
      username: args.username,
      firstname: args.firstname,
      lastname: args.lastname
    });

    // Return user
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
      process.env.APP_SECRET,
      { expiresIn: '1d' }
    );

    // Add JWT to response
    context.res.cookie('userToken', token, {
      maxAge: Math.floor(Date.now() / 1000) + 60 * 60 // One hour
      // httpOnly: true
    });

    return user;
  },
  signout(root, args, context) {
    context.res.clearCookie('userToken');
    return { success: 'Successfully logged out.' };
  }
};

module.exports = Mutation;
