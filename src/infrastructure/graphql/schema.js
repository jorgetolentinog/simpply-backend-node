const { GraphQLSchema } = require("graphql");
const { Query } = require("./query/query");
const { Mutation } = require("./mutation/mutation");

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

module.exports = { Schema: Schema };
