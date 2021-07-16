const yup = require("yup");

const AppointmentPatientSchema = yup.object().shape({
  documentType: yup.string().required(),
  document: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  birthdate: yup.date().required(),
  address: yup.string().required(),
  addressNumber: yup.string().required(),
});

const AppointmentSchema = yup.object().shape({
  date: yup.date().required(),
  serviceId: yup.string().required(),
  patients: yup.array().of(AppointmentPatientSchema).min(1),
});

module.exports = { AppointmentSchema };
