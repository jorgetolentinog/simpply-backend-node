function PatientRepositorySearchByDocument({ airtableAPI, yup }) {
  const schema = yup
    .array()
    .of(
      yup.object({
        document: yup.string().required(),
        documentType: yup.string().required(),
      })
    )
    .min(1)
    .strict();

  return async (documents) => {
    await schema.validate(documents);

    const conditions = [];
    for (let d of documents) {
      conditions.push(
        `AND({document} = '${d.document}', {document_type} = '${d.documentType}')`
      );
    }

    const formula = `OR(${conditions.join(",")})`;
    const resp = await airtableAPI.get(
      `patient?view=Grid%20view&filterByFormula=${formula}`
    );

    return resp.data.records.map((d) => ({
      id: d.id,
      document: d.fields.document,
      documentType: d.fields.document_type,
    }));
  };
}

module.exports = { PatientRepositorySearchByDocument };
