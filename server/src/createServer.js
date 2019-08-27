/* eslint-disable */
const { ApolloServer, gql } = require('apollo-server-express');
const { prisma } = require('../generated/prisma-client/index');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Types = require('./resolvers/Types');
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
