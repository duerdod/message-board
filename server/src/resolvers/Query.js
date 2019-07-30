const Query = {
  messages(root, args, context) {
    return context.prisma.messages();
  },
  message(root, { id }, context) {
    return context.prisma.message({ id });
  }
};

module.exports = Query;
