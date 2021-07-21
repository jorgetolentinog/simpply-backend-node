import { container } from "tsyringe";
import { Airtable } from "../src/infrastructure/airtable/airtable";
import { ServiceServiceList } from "../src/service/service/list";
import { mock } from "jest-mock-extended";

describe("Prueba", () => {
  test("ok 2", async () => {
    const scope = container.createChildContainer();
    const AirtableMock = mock<Airtable>();

    AirtableMock.http.get = jest
      .fn()
      .mockResolvedValue({ data: { records: [] } });

    container.registerInstance(Airtable, AirtableMock);
    const service = scope.resolve(ServiceServiceList);

    console.log("service", await service.handle());
  });
});
