const {
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLString,
} = require("graphql");

const { PatientDocumentTypeEnum } = require("./patient-document-type-enum");

const AppointmentPatientInput = new GraphQLInputObjectType({
  name: "AppointmentPatientInput",
  fields: {
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    birthdate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    document: {
      type: new GraphQLNonNull(GraphQLString),
    },
    documentType: {
      type: new GraphQLNonNull(PatientDocumentTypeEnum),
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

module.exports = { AppointmentPatientInput };
