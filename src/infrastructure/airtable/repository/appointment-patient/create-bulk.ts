import { injectable } from "tsyringe";
import { AirtableClient } from "../../client";
import {
  AppointmentPatient,
  Record,
  RecordDraft,
} from "../../schema/appointment-patient";

type IHandleInput = {
  appointmentId: string;
  patientId: string;
}[];

@injectable()
class AppointmentPatientRepositoryCreateBulk {
  constructor(private client: AirtableClient) {}

  async handle(elements: IHandleInput) {
    const body: AppointmentPatient<RecordDraft> = {
      records: elements.map((o) => ({
        fields: {
          appointment_id: [o.appointmentId],
          patient_id: [o.patientId],
        },
      })),
    };

    const resp = await this.client.http.post<AppointmentPatient<Record>>(
      "appointment_patient",
      body
    );

    return resp.data.records.map((o) => ({
      id: o.id,
    }));
  }
}

export { AppointmentPatientRepositoryCreateBulk };
