/* eslint-disable */
const { ApolloServer, gql } = require('apollo-server-express');
const { prisma } = require('../generated/prisma-client/index');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const typeDefs = require('./graphqlschema');

const corsOptions = {
  origin: '*',
  credentials: true
};

function createServer() {
  return new ApolloServer({
    cors: corsOptions,
    typeDefs,
    resolvers: {
      Query,
      Mutation,
      // Type resolvers. Where to put them??! They cannot stay.
      // Comments.
      Message: {
        comments(parent, args, ctx) {
          return ctx.prisma
            .message({ id: parent.id })
            .comments({ orderBy: 'date_DESC' });
        }
      },
      // Connected user message
      User: {
        messages(parent, args, ctx) {
          return ctx.prisma
            .user({ id: parent.id })
            .messages({ orderBy: 'date_DESC' });
        }
      },
      // For message tagging
      Message: {
        tags(parent, args, ctx) {
          return ctx.prisma.message({ id: parent.id }).tags();
        }
      }
    },
    // Surfaces prisma db.
    context: ({ req, res }) => ({
      ...req,
      ...res,
      prisma
    })
  });
}

module.exports = createServer;
