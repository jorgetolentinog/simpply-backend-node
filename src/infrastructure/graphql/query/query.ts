import { container } from "tsyringe";
import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
} from "graphql";
import { Service } from "./type/service";
import { ServiceServiceList } from "@/service/service/list";
import { Appointment } from "./type/appointment";
import { AppointmentServiceFind } from "@/service/appointment/find";

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
    appointmentById: {
      type: Appointment,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID),
        },
      },
      resolve: async (_, args) => {
        const service = container.resolve(AppointmentServiceFind);
        return await service.handle({
          id: args.id,
        });
      },
    },
  },
});

export { Query };
