const { GraphQLObjectType, GraphQLID } = require("graphql");
const { AppointmentInputType } = require("./type/AppointmentInputType");
const { AppointmentType } = require("../query/type/AppintmentType");

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
      resolve: async (_, { input }) => {
        return {
          _id: "asd"
        };
      },
    },
  },
});

module.exports = { MutationType };
