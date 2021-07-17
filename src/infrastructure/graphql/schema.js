const { GraphQLSchema } = require("graphql");
const { QueryType } = require("./query/query");
const { MutationType } = require("./mutation/MutationType");

const Schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});

module.exports = { Schema: Schema };
