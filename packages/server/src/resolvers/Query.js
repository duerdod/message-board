const Query = {
  messages(root, args, context) {
    return context.prisma.messages();
  }
};

module.exports = Query;
