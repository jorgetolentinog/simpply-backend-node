const { airtableAPI } = require("../../../airtable/api");

function AppointmentRepositoryCreate() {
  return async () => {
    const resp = await airtableAPI.post("appointment", {
      records: [
        {
          fields: {
            pk: "3",
            serviceId: ["rec3QhexlBAzfVnBl"],
            Status: "Todo",
          },
        },
      ],
    });

    return {
      id: resp.data.records[0].id,
    };
  };
}

module.exports = { AppointmentRepositoryCreate };
