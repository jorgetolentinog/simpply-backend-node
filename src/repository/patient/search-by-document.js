const yup = require("yup");

function PatientRepositorySearchByDocument({ airtableAPI }) {
  return async (documents) => {
    await InputSchema.validate(documents);

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

const InputSchema = yup
  .array()
  .of(
    yup.object().shape({
      document: yup.string().required(),
      documentType: yup.string().required(),
    })
  )
  .min(1);

module.exports = { PatientRepositorySearchByDocument };
