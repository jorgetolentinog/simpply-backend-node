const {
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
} = require("graphql");

const {
  AppointmentPatientInput,
} = require("./appointment-patient-input");

const AppointmentInput = new GraphQLInputObjectType({
  name: "AppointmentInput",
  fields: {
    date: {
      type: new GraphQLNonNull(GraphQLString),
    },
    serviceId: {
      type: new GraphQLNonNull(GraphQLString),
    },
    patients: {
      type: new GraphQLNonNull(GraphQLList(AppointmentPatientInput)),
    },
  },
});

module.exports = { AppointmentInput };
