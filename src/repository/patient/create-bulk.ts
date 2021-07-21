import { injectable } from "tsyringe";
import { Airtable } from "@/infrastructure/airtable/airtable";
import {
  Patient,
  Record,
  RecordDraft,
} from "@/infrastructure/airtable/schema/patient";

type HandleInput = {
  documentType: string;
  document: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthdate: string;
  address: string;
  addressNumber: string;
}[];

@injectable()
class PatientRepositoryCreateBulk {
  constructor(private airtable: Airtable) {}

  async handle(elements: HandleInput) {
    const body: Patient<RecordDraft> = {
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

    const resp = await this.airtable.http.post<Patient<Record>>(
      "patient",
      body
    );

    return resp.data.records.map((o) => ({
      id: o.id,
    }));
  }
}

export { PatientRepositoryCreateBulk };
