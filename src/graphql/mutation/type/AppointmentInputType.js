const {
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
} = require("graphql");

const {
  AppointmentPatientInputType,
} = require("./AppointmentPatientInputType");

const AppointmentInputType = new GraphQLInputObjectType({
  name: "AppointmentInput",
  fields: {
    date: {
      type: new GraphQLNonNull(GraphQLString),
    },
    serviceId: {
      type: new GraphQLNonNull(GraphQLString),
    },
    patients: {
      type: new GraphQLNonNull(GraphQLList(AppointmentPatientInputType)),
    },
  },
});

module.exports = { AppointmentInputType };
