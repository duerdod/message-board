const Query = {
  messages(root, args, context) {
    const messages = context.prisma.messages({
      first: 250, // Hmm.. not sure what my plan is.
      orderBy: 'date_DESC'
    });
    return messages;
  },
  message(root, { id }, context) {
    return context.prisma.message({ id });
  },
  async currentUser(root, args, context) {
    if (!context.req.user) return null;
    const user = await context.prisma.user({ id: context.req.user.id });
    return user;
  }
};

module.exports = Query;
