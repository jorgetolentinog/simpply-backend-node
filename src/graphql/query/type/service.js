const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
} = require("graphql");

const ServiceType = new GraphQLObjectType({
  name: "Service",
  fields: () => ({
    _id: {
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

module.exports = { ServiceType };
