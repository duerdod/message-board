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
    // Rewrite to use a custom scalar inside graphql schema.
    const date = Date.now().toString();
    // Add message...
    const newMessage = await context.prisma.createMessage({
      title: sanitizer(title),
      message: sanitizer(message),
      author: sanitizer(author),
      dislikes: 0,
      date
    });
    // Add / update timestamp cookie.
    addUserTimestamp(context);
    // Return message.
    return newMessage;
  },
  async dislikeMessage(root, { id }, context) {
    // Querying the message to get number of dislikes.
    const message = await context.prisma.message({ id });
    const { dislikes } = message;

    // Is dislike count greater than or equals to 5?
    // Remove it.
    if (dislikes >= 5) {
      return context.prisma.deleteMessage({ id });
    }

    // Else set new dislike count.
    const dislike = await context.prisma.updateMessage({
      data: {
        dislikes: dislikes + 1
      },
      where: {
        id
      }
    });
    return dislike;
  },
  deleteMessage(root, { id }, context) {
    return context.prisma.deleteMessage({ id });
  }
};

module.exports = Mutation;
