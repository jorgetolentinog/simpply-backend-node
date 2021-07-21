import { container } from "tsyringe";
import { GraphQLObjectType } from "graphql";
import { AppointmentInput } from "./type/appointment-input";
import { Appointment } from "../query/type/appointment";
import { AppointmentServiceCreate } from "../../../service/appointment/create";

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    appointmentAdd: {
      type: Appointment,
      args: {
        input: {
          type: AppointmentInput,
        },
      },
      resolve: async (_, args) => {
        const service = container.resolve(AppointmentServiceCreate);
        return await service.handle(args.input);
      },
    },
  },
});

module.exports = { Mutation };
