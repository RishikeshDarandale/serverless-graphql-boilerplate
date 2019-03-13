'use strict';

const {log} = require('../libs/utils/LogUtils.js');

// TODO: Define your type here
const typeDef = `
  extend type Query {
    myQuery(id: ID!): MyType
  }

  extend type Mutation {
    myMutation(id: ID!): MyType
  }

  type MyType {
    id: ID!
  }
`;

// TODO: Define your query and mutation here
// FYI: It is always helpful to group the resolvers of this type here only.
const resolvers = {
  Query: {
    myQuery: async (parent, args, context) => {
      log.info('Got the request', {id: args.id});
    },
  },
  Mutation: {
    myMutation: (parent, args, context) => {
      log.info('Got the request');
      // TODO: here actual business logic call
    },
  },
};

exports.typeDef = typeDef;
exports.resolvers = resolvers;
