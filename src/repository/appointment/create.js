function AppointmentRepositoryCreate({ airtable, yup }) {
  const schema = yup
    .object({
      serviceId: yup.string().required(),
      date: yup.string().required(),
    })
    .strict();

  return async (params) => {
    await schema.validate(params);

    const body = {
      records: [
        {
          fields: {
            service_id: [params.serviceId],
            date: params.date,
          },
        },
      ],
    };

    await airtable.schema.appointment.validate(body);
    const resp = await airtable.http.post("appointment", body);

    return {
      id: resp.data.records[0].id,
    };
  };
}

module.exports = { AppointmentRepositoryCreate };
