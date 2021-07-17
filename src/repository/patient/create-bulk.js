const { PatientListSchema } = require("../../infrastructure/airtable/schema");
const dayjs = require("dayjs");

function PatientRepositoryCreateBulk({ airtableAPI }) {
  return async (elements) => {
    const records = elements.map((o) => ({
      fields: {
        document_type: o.documentType,
        document: o.document,
        first_name: o.firstName,
        last_name: o.lastName,
        email: o.email,
        phone: o.phone,
        birthdate: dayjs(o.birthdate).format("YYYY-MM-DD"),
        address: o.address,
        address_number: o.addressNumber,
      },
    }));

    await PatientListSchema.validate(records, { strict: true });
    const resp = await airtableAPI.post("patient", {
      records: records,
    });

    return resp.data.records.map((d) => ({
      id: d.id,
    }));
  };
}

module.exports = { PatientRepositoryCreateBulk };
