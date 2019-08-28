/* eslint-disable */
const { ApolloServer, gql } = require('apollo-server-express');
const { importSchema } = require('graphql-import');
const { prisma } = require('../generated/prisma-client/index');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Types = require('./resolvers/Types');

// Using importSchema to import Prisma generated types.
const typeDefs = importSchema('src/board-schema.graphql');

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
      // Type resolvers for sub queries.
      ...Types
    },
    // Spreads request and response to each request.
    context: ({ req, res }) => ({
      ...req,
      ...res,
      prisma
    })
  });
}

module.exports = createServer;
