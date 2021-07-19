function AppointmentRepositoryCreate({ airtable, validator }) {
  const check = validator.compile({
    date: "string",
    serviceId: "string",
  });

  return async (params) => {
    const valid = check(params);
    if (valid !== true) {
      throw new Error(valid[0].message);
    }

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

    const appointmentValid = airtable.check.appointment(body);
    if (appointmentValid !== true) {
      throw new Error(appointmentValid[0].message);
    }

    const resp = await airtable.http.post("appointment", body);
    return {
      id: resp.data.records[0].id,
    };
  };
}

module.exports = { AppointmentRepositoryCreate };
