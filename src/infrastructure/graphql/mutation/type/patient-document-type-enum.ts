import { GraphQLEnumType } from "graphql";

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

export { PatientDocumentTypeEnum };
