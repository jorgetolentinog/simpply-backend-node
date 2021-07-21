import { injectable } from "tsyringe";
import { AirtableClient } from "../../client";
import { Appointment, Record, RecordDraft } from "../../schema/appointment";

interface IHandleInput {
  serviceId: string;
  date: string;
}

@injectable()
class AppointmentRepositoryCreate {
  constructor(private client: AirtableClient) {}

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

    const resp = await this.client.http.post<Appointment<Record>>(
      "appointment",
      body
    );

    return {
      id: resp.data.records[0].id,
    };
  }
}

export { AppointmentRepositoryCreate };
