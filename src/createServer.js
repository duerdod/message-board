const { GraphQLServer } = require('graphql-yoga');
const Prisma = require('../generated/prisma-client/index');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');

function createServer() {
  return new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: { Query },
    context: Prisma
  });
}

module.exports = createServer;
