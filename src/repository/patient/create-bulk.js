function PatientRepositoryCreateBulk({ airtable, validator }) {
  const check = validator.compile({
    $$root: true,
    type: "array",
    items: {
      $$type: "object",
      documentType: "string",
      document: "string",
      firstName: "string",
      lastName: "string",
      email: "string",
      phone: "string",
      birthdate: "string",
      address: "string",
      addressNumber: "string",
    },
  });

  return async (elements) => {
    const valid = check(elements);
    if (valid !== true) {
      throw new Error(valid[0].message);
    }

    const body = {
      records: elements.map((o) => ({
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
      })),
    };

    const patientValid = airtable.check.patient(body);
    if (patientValid !== true) {
      throw new Error(patientValid[0].message);
    }

    const resp = await airtable.http.post("patient", body);

    return resp.data.records.map((d) => ({
      id: d.id,
    }));
  };
}

module.exports = { PatientRepositoryCreateBulk };
