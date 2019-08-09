/* eslint-disable */
const { ApolloServer, gql } = require('apollo-server-express');
const { prisma } = require('../generated/prisma-client/index');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');

// Apollo Server 2 uses gql.
// Separate it from createServer.
const typeDefs = gql`
  type Message {
    id: ID!
    title: String!
    message: String!
    author: String!
    dislikes: Int!
    comments: [Comment]
    date: String
  }

  type Comment {
    id: ID!
    comment: String!
    author: String!
    date: String
    dislikes: Int!
    message: Message!
  }

  type Query {
    messages: [Message]
    message(id: ID!): Message
  }

  type Mutation {
    addMessage(
      title: String!
      message: String!
      author: String!
      date: String
    ): Message
    dislikeMessage(id: ID!): Message
    deleteMessage(id: ID!): Message
    commentMessage(id: ID!, author: String!, comment: String!): Comment
  }
`;

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
      // Type resolvers.
      Message: {
        comments(parent, args, ctx) {
          return ctx.prisma
            .message({ id: parent.id })
            .comments({ orderBy: 'date_ASC' });
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
