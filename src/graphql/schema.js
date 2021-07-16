const { GraphQLSchema } = require("graphql");
const { QueryType } = require("./query/query");

const Schema = new GraphQLSchema({
  query: QueryType,
});

module.exports = { Schema: Schema };
