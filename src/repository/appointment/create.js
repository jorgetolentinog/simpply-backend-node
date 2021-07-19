function AppointmentRepositoryCreate({ airtable, validator }) {
  const check = validator.compile({
    date: "number",
    serviceId: "string",
  });

  return async (params) => {
    const isValid = check(params);
    if (!isValid !== true) {
      throw new Error(isValid[0].message);
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

    const isAppointmentValid = airtable.check.appointment(body);
    if (isAppointmentValid !== true) {
      throw new Error(isAppointmentValid[0].message);
    }

    const resp = await airtable.http.post("appointment", body);
    return {
      id: resp.data.records[0].id,
    };
  };
}

module.exports = { AppointmentRepositoryCreate };
