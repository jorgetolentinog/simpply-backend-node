const { GraphQLObjectType } = require("graphql");
const { AppointmentInputType } = require("./type/AppointmentInputType");
const { AppointmentType } = require("../query/type/AppintmentType");
const {
  AppointmentLogicCreate,
} = require("../../core/logic/appointment/AppointmentLogicCreate");

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
        const create = AppointmentLogicCreate();
        const newAppointment = await create(args.input);
        return {
          id: newAppointment.id,
        };
      },
    },
  },
});

module.exports = { MutationType };
