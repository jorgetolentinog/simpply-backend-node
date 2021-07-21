import { injectable } from "tsyringe";
import { Airtable } from "@/infrastructure/airtable/airtable";
import { Patient, Record } from "@/infrastructure/airtable/schema/patient";

type HandleInput = {
  document: string;
  documentType: string;
}[];

@injectable()
class PatientRepositorySearchByDocument {
  constructor(private airtable: Airtable) {}

  async handle(documents: HandleInput) {
    const conditions = [];
    for (let d of documents) {
      conditions.push(
        `AND({document} = '${d.document}', {document_type} = '${d.documentType}')`
      );
    }

    const formula = `OR(${conditions.join(",")})`;
    const resp = await this.airtable.http.get<Patient<Record>>(
      `patient?view=Grid%20view&filterByFormula=${formula}`
    );

    return resp.data.records.map((o) => ({
      id: o.id,
      document: o.fields.document,
      documentType: o.fields.document_type,
    }));
  }
}

export { PatientRepositorySearchByDocument };
