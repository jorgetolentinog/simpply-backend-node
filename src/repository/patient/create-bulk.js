function PatientRepositoryCreateBulk({ airtable, yup }) {
  const schema = yup
    .array()
    .of(
      yup.object({
        documentType: yup.string().required(),
        document: yup.string().required(),
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().required(),
        phone: yup.string().required(),
        birthdate: yup.string().required(),
        address: yup.string().required(),
        addressNumber: yup.string().required(),
      })
    )
    .strict();

  return async (elements) => {
    await schema.validate(elements);

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

    await airtable.schema.patient.validate(body);
    const resp = await airtable.http.post("patient", body);

    return resp.data.records.map((d) => ({
      id: d.id,
    }));
  };
}

module.exports = { PatientRepositoryCreateBulk };
