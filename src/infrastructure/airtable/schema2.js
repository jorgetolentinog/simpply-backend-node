function makeSchema({ yup }) {
  const appointment = yup
    .object({
      records: yup
        .array()
        .of(
          yup.object({
            fields: yup.object({
              date: yup.string().required(),
              service_id: yup.array().of(yup.string()).required(),
            }),
          })
        )
        .required(),
    })
    .strict();

  const appointmentPatient = yup
    .object({
      records: yup
        .array()
        .of(
          yup.object({
            fields: yup.object({
              appointment_id: yup.array().of(yup.string()).required(),
              patient_id: yup.array().of(yup.string()).required(),
            }),
          })
        )
        .required(),
    })
    .strict();

  const patient = yup
    .object({
      records: yup
        .array()
        .of(
          yup.object().shape({
            fields: yup.object({
              document_type: yup.string().required(),
              document: yup.string().required(),
              first_name: yup.string().required(),
              last_name: yup.string().required(),
              email: yup.string().email().required(),
              phone: yup.string().required(),
              birthdate: yup.string().required(),
              address: yup.string().required(),
              address_number: yup.string().required(),
            }),
          })
        )
        .required(),
    })
    .strict();

  return {
    appointment,
    appointmentPatient,
    patient,
  };
}

module.exports = { makeSchema };
