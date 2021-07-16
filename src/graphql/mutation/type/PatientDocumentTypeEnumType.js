const { GraphQLEnumType } = require("graphql");

const PatientDocumentTypeEnumType = new GraphQLEnumType({
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

module.exports = { PatientDocumentTypeEnumType };
