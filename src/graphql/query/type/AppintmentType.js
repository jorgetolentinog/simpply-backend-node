const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
} = require("graphql");

const AppointmentType = new GraphQLObjectType({
  name: "Appointment",
  fields: () => ({
    _id: {
      type: GraphQLNonNull(GraphQLID),
    },
    createdTime: {
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});

module.exports = { AppointmentType };
