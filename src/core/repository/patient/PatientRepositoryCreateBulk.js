const { airtableAPI } = require("../../../airtable/api");

function PatientRepositoryCreateBulk() {
  return async (elements) => {
    const records = elements.map((o) => ({
      fields: {
        pk: "3",
        name: "name",
        document: o.document,
        documentType: o.documentType,
      },
    }));

    const resp = await airtableAPI.post("patient", {
      records: records,
    });

    return resp.data.records.map((d) => ({
      id: d.id,
    }));
  };
}

module.exports = { PatientRepositoryCreateBulk };
