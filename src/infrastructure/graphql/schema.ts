import { GraphQLSchema } from "graphql";
import { Query } from "./query/query";
import { Mutation } from "./mutation/mutation";

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export { Schema };
