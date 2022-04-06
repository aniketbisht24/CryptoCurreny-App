const { GraphQLJSON, GraphQLJSONObject } = require('graphql-type-json');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const GraphQLDateTime = require('graphql-type-datetime');
const GraphQLUuid = require('graphql-type-uuid');
const GraphQLEmail = require('graphql-type-email');

const resolvers = {
  DateTime: GraphQLDateTime,
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
  UUID: GraphQLUuid,
  Email: GraphQLEmail,
};

const typeDefs = `
scalar DateTime
scalar JSON
scalar JSONObject
scalar Date
scalar UUID
scalar Email
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
