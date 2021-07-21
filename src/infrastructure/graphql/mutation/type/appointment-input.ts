import {
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
} from "graphql";
import { AppointmentPatientInput } from "./appointment-patient-input";

const AppointmentInput = new GraphQLInputObjectType({
  name: "AppointmentInput",
  fields: {
    date: {
      type: new GraphQLNonNull(GraphQLString),
    },
    serviceId: {
      type: new GraphQLNonNull(GraphQLString),
    },
    patients: {
      type: new GraphQLNonNull(GraphQLList(AppointmentPatientInput)),
    },
  },
});

export { AppointmentInput };
