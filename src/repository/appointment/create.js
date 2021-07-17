const { AppointmentSchema } = require("../../infrastructure/airtable/schema");

function AppointmentRepositoryCreate({ airtableAPI }) {
  return async () => {
    const element = {
      fields: {
        pk: "3",
        service_id: ["rec3QhexlBAzfVnBl"],
        date: "2021/01/01",
      },
    };

    await AppointmentSchema.validate(element);

    const resp = await airtableAPI.post("appointment", {
      records: [element],
    });

    return {
      id: resp.data.records[0].id,
    };
  };
}

module.exports = { AppointmentRepositoryCreate };
