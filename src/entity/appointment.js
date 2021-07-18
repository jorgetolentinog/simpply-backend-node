const yup = require("yup");

const AppointmentSchema = yup
  .object({
    date: yup.string().required(),
    serviceId: yup.string().required(),
    patients: yup
      .array()
      .of(
        yup.object({
          documentType: yup.string().required(),
          document: yup.string().required(),
          firstName: yup.string().required(),
          lastName: yup.string().required(),
          email: yup.string().email().required(),
          phone: yup.string().required(),
          birthdate: yup.string().required(),
          address: yup.string().required(),
          addressNumber: yup.string().required(),
        })
      )
      .min(1),
  })
  .strict();

module.exports = { AppointmentSchema };
