const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
} = require("graphql");

const Appointment = new GraphQLObjectType({
  name: "Appointment",
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLID),
    },
    createdTime: {
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});

module.exports = { Appointment };
