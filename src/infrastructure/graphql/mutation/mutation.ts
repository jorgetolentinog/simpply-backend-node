import { container } from "tsyringe";
import { GraphQLObjectType } from "graphql";
import { AppointmentInput } from "./type/appointment-input";
import { Appointment } from "../query/type/appointment";
import { AppointmentServiceCreate } from "@/service/appointment/create";
import { AppointmentServiceFind } from "@/service/appointment/find";

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
        const appointmentCreate = container.resolve(AppointmentServiceCreate);
        const appointmentFind = container.resolve(AppointmentServiceFind);

        const appointment = await appointmentCreate.handle(args.input);
        return await appointmentFind.handle({ id: appointment.id });
      },
    },
  },
});

export { Mutation };
