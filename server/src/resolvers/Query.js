const Query = {
  messages(root, args, context) {
    const messages = context.prisma.messages({
      orderBy: 'date_DESC'
    });
    return messages;
  },
  message(root, { id }, context) {
    return context.prisma.message({ id });
  }
};

module.exports = Query;
