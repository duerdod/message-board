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
      date
    });
    // Add / update timestamp cookie.
    addUserTimestamp(context);
    // Return message.
    return newMessage;
  }
};

module.exports = Mutation;
