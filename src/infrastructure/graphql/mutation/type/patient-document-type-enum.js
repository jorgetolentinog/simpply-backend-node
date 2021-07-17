const { GraphQLEnumType } = require("graphql");

const PatientDocumentTypeEnum = new GraphQLEnumType({
  name: "PatientDocumentTypeEnum",
  values: {
    RUT: {
      value: "RUT",
    },
    CE: {
      value: "CE",
    },
  },
});

module.exports = { PatientDocumentTypeEnum };
