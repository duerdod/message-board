const Types = {
  // Type resolvers. Where to put them??! They cannot stay.
  // Sub fields to message.
  Message: {
    comments(parent, args, ctx) {
      return ctx.prisma
        .message({ id: parent.id })
        .comments({ orderBy: 'date_DESC' });
    },
    tags(parent, args, ctx) {
      return ctx.prisma.message({ id: parent.id }).tags();
    },
    user(parent, args, ctx) {
      return ctx.prisma.message({ id: parent.id }).user();
    }
  },
  Tag: {
    messages(parent, args, ctx) {
      // Get parent id from tag and get messages related to that tag id.
      return ctx.prisma.tag({ id: parent.id }).messages();
    }
  },
  // Connected user message
  User: {
    messages(parent, args, ctx) {
      return ctx.prisma
        .user({ id: parent.id })
        .messages({ orderBy: 'date_DESC' });
    }
  }
};

module.exports = Types;
