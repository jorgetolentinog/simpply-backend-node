import { injectable } from "tsyringe";
import { Airtable } from "@/infrastructure/airtable/airtable";
import {
  AppointmentPatient,
  Record,
  RecordDraft,
} from "@/infrastructure/airtable/schema/appointment-patient";

type IHandleInput = {
  appointmentId: string;
  patientId: string;
}[];

@injectable()
class AppointmentPatientRepositoryCreateBulk {
  constructor(private airtable: Airtable) {}

  async handle(elements: IHandleInput) {
    const body: AppointmentPatient<RecordDraft> = {
      records: elements.map((o) => ({
        fields: {
          appointment_id: [o.appointmentId],
          patient_id: [o.patientId],
        },
      })),
    };

    const resp = await this.airtable.http.post<AppointmentPatient<Record>>(
      "appointment_patient",
      body
    );

    return resp.data.records.map((o) => ({
      id: o.id,
    }));
  }
}

export { AppointmentPatientRepositoryCreateBulk };
