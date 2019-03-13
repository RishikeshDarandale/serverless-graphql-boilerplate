const {ApolloServer, gql} = require('apollo-server-lambda');

const {schema, resolvers} = require('../src/graphql/schema.js');
const {log} = require('../src/libs/utils/LogUtils.js');

// get the schema
const typeDefs = gql(schema);

// create graphql server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: process.env.ENVIRONMENT === 'production' ? false : true,
  introspection: true,
  playground: process.env.ENVIRONMENT === 'production' ? false : true,
  context: ({event, context}) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
});

// lambda handler
exports.handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});
