const {
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLString,
} = require("graphql");

const AppointmentPatientInputType = new GraphQLInputObjectType({
  name: "AppointmentPatientInput",
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastname: {
      type: new GraphQLNonNull(GraphQLString),
    },
    birthdate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    document: {
      type: new GraphQLNonNull(GraphQLString),
    },
    documentType: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    phone: {
      type: new GraphQLNonNull(GraphQLString),
    },
    address: {
      type: new GraphQLNonNull(GraphQLString),
    },
    addressNumber: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

module.exports = { AppointmentPatientInputType };
