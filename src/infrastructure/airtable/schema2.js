function makeSchema({ yup }) {
  const appointment = yup
    .object({
      records: yup
        .array()
        .of(
          yup.object({
            fields: yup.object().shape({
              date: yup.string().required(),
              service_id: yup.array().of(yup.string()).required(),
            }),
          })
        )
        .required(),
    })
    .strict();

  return {
    appointment,
  };
}

module.exports = { makeSchema };
