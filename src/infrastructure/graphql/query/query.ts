import { container } from "tsyringe";
import { GraphQLObjectType, GraphQLList } from "graphql";
import { Service } from "./type/service";
import { ServiceServiceList } from "@/service/service/list";

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    services: {
      type: GraphQLList(Service),
      resolve: async () => {
        const service = container.resolve(ServiceServiceList);
        return await service.handle();
      },
    },
  },
});

export { Query };