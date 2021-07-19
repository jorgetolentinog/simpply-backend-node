function PatientRepositorySearchByDocument({ airtable, validator }) {
  const check = validator.compile({
    $$root: true,
    type: "array",
    items: {
      $$type: "object",
      document: "string",
      documentType: "string",
    },
  });

  return async (documents) => {
    const valid = check(documents);
    if (valid !== true) {
      throw new Error(valid[0].message);
    }

    const conditions = [];
    for (let d of documents) {
      conditions.push(
        `AND({document} = '${d.document}', {document_type} = '${d.documentType}')`
      );
    }

    const formula = `OR(${conditions.join(",")})`;
    const resp = await airtable.http.get(
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
