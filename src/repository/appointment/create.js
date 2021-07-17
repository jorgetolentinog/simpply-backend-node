const { AppointmentSchema } = require("../../infrastructure/airtable/schema");

function AppointmentRepositoryCreate({ airtableAPI }) {
  return async (params) => {
    const element = {
      fields: {
        service_id: [params.serviceId],
        date: params.date,
      },
    };

    await AppointmentSchema.validate(element, { strict: true });

    const resp = await airtableAPI.post("appointment", {
      records: [element],
    });

    return {
      id: resp.data.records[0].id,
    };
  };
}

module.exports = { AppointmentRepositoryCreate };
