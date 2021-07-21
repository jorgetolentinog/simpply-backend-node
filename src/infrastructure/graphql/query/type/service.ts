import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
} from "graphql";

const Service = new GraphQLObjectType({
  name: "Service",
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLID),
    },
    pk: {
      type: GraphQLNonNull(GraphQLID),
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    description: {
      type: GraphQLNonNull(GraphQLString),
    },
    createdTime: {
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});

export { Service };
