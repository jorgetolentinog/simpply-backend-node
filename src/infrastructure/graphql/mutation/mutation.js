const { GraphQLObjectType } = require("graphql");
const { AppointmentInput } = require("./type/appointment-input");
const { Appointment } = require("../query/type/appointment");
const { app } = require("../../../app");

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
        const newAppointment = await app.appointment.create(args.input);
        return {
          id: newAppointment.id,
        };
      },
    },
  },
});

module.exports = { Mutation };
