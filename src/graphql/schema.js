`use strict`;

const {merge} = require('lodash');

const query = `
  type Query {
    _empty: String
  }
`;

const mutation = `
  type Mutation {
    _empty: String
  }
`;

let schema = query.concat(mutation);
let resolvers = {};

const context = require.context('.', false, /\.js$/);

context.keys().forEach(function(file) {
  const include = context(file);
  // if graphql types
  if (include.typeDef) {
    schema = schema.concat(include.typeDef);
  }
  // if graphql resolvers
  if (include.resolvers) {
    resolvers = merge(resolvers, include.resolvers);
  }
});

exports.schema = schema;
exports.resolvers = resolvers;
