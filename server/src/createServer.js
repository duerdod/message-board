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
    resolvers: { Query, Mutation },
    // Surfaces prisma db.
    context: ({ req, res }) => ({
      ...req,
      ...res,
      prisma
    })
  });
}

module.exports = createServer;
