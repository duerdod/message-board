const Query = {
  messages(root, args, context) {
    const messages = context.prisma.messages({
      first: args.first, // 150,
      skip: args.skip,
      orderBy: 'date_DESC'
    });
    return messages;
  },
  async message(root, { id }, context) {
    const message = await context.prisma.message({ id });
    return message;
  },
  async currentUser(root, args, context) {
    if (!context.req.user) return null;
    const user = await context.prisma.user({ id: context.req.user.id });
    return user;
  },
  // Should be called something else.
  async tag(root, args, context) {
    // Messages because Im only intrested in messages related to the tag ...
    const messages = await context.prisma.tag({ tag: args.tag });
    return messages;
  },
  async tags(root, args, context) {
    const tags = await context.prisma.tags({
      first: 10,
      orderBy: 'count_DESC'
    });
    return tags;
  }
};

module.exports = Query;
