const { GraphQLObjectType } = require("graphql");
const { AppointmentInputType } = require("./type/AppointmentInputType");
const { AppointmentType } = require("../query/type/AppintmentType");
const { app } = require("../../app");

const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    appointmentAdd: {
      type: AppointmentType,
      args: {
        input: {
          type: AppointmentInputType,
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

module.exports = { MutationType };
