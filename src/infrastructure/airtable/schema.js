const yup = require("yup");

const AppointmentSchema = yup.object().shape({
  fields: yup.object().shape({
    date: yup.date().required(),
    service_id: yup.array().of(yup.string()).required(),
  }),
});

const AppointmentPatientSchema = yup.object().shape({
  fields: yup.object().shape({
    appointment_id: yup.array().of(yup.string()).required(),
    patient_id: yup.array().of(yup.string()).required(),
  }),
});

const PatientSchema = yup.object().shape({
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

const PatientListSchema = yup.array().of(PatientSchema);
const AppointmentPatientListSchema = yup.array().of(AppointmentPatientSchema);

module.exports = {
  AppointmentSchema,
  AppointmentPatientSchema,
  AppointmentPatientListSchema,
  PatientSchema,
  PatientListSchema,
};
