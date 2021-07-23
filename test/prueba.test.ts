import { container } from "tsyringe";
import { AirtableClient } from "../src/infrastructure/airtable/client";
import { ServiceServiceList } from "../src/service/service/list";
import { mock } from "jest-mock-extended";

describe("Ejemplo", () => {
  test("Inyección de dependencia", async () => {
    const scope = container.createChildContainer();
    const AirtableClientMock = mock<AirtableClient>();

    AirtableClientMock.http.get = jest
      .fn()
      .mockResolvedValue({ data: { records: [] } });

    scope.registerInstance(AirtableClient, AirtableClientMock);
    const service = scope.resolve(ServiceServiceList);
    const result = await service.handle();
    expect(result.length).toBe(0);
  });
});
