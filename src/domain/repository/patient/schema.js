const yup = require("yup");

const PatientRepositorySchema = yup.object().shape({
  fields: yup.object().shape({
    document_type: yup.string().required(),
    document: yup.string().required(),
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    birthdate: yup.date().required(),
    address: yup.string().required(),
    address_number: yup.string().required(),
  }),
});

const PatientRepositorySchemaList = yup
  .array()
  .of(PatientRepositorySchema)
  .max(10); // Limite de Airtable;

module.exports = { PatientRepositorySchema, PatientRepositorySchemaList };
