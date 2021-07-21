import { injectable } from "tsyringe";
import { Airtable } from "@/infrastructure/airtable/airtable";
import {
  Appointment,
  Record,
  RecordDraft,
} from "@/infrastructure/airtable/schema/appointment";

interface IHandleInput {
  serviceId: string;
  date: string;
}

@injectable()
class AppointmentRepositoryCreate {
  constructor(private airtable: Airtable) {}

  async handle(params: IHandleInput) {
    const body: Appointment<RecordDraft> = {
      records: [
        {
          fields: {
            date: params.date,
            service_id: [params.serviceId],
          },
        },
      ],
    };

    const resp = await this.airtable.http.post<Appointment<Record>>(
      "appointment",
      body
    );

    return {
      id: resp.data.records[0].id,
    };
  }
}

export { AppointmentRepositoryCreate };
