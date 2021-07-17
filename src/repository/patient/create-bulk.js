const { PatientListSchema } = require("../../infrastructure/airtable/schema");

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
        birthdate: o.birthdate,
        address: o.address,
        address_number: o.addressNumber,
      },
    }));

    await PatientListSchema.validate(records);

    const resp = await airtableAPI.post("patient", {
      records: records,
    });

    return resp.data.records.map((d) => ({
      id: d.id,
    }));
  };
}

module.exports = { PatientRepositoryCreateBulk };
