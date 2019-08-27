const Query = {
  messages(root, args, context) {
    const messages = context.prisma.messages({
      first: args.first,
      skip: args.skip,
      orderBy: 'date_DESC'
    });
    return messages;
  },
  async message(root, { id }, context) {
    const message = await context.prisma.message({ id });
    return message;
  },
  user(root, args, context) {
    return context.prisma.user({ username: args.username });
  },
  async currentUser(root, args, context) {
    if (!context.req.user) return null;
    const user = await context.prisma.user({ id: context.req.user.id });
    return user;
  }
};

module.exports = Query;
