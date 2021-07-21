import { injectable } from "tsyringe";
import { Airtable } from "../../infrastructure/airtable/airtable";
import { Service, Record } from "../../infrastructure/airtable/schema/service";

@injectable()
class ServiceRepositoryList {
  constructor(private airtable: Airtable) {}

  async handle() {
    const resp = await this.airtable.http.get<Service<Record>>(
      "service?view=Grid%20view"
    );

    return resp.data.records.map((o) => ({
      id: o.id,
      pk: o.fields.pk,
      name: o.fields.name,
      description: o.fields.description,
      price: o.fields.price,
      createdTime: o.createdTime,
    }));
  }
}

export { ServiceRepositoryList };
