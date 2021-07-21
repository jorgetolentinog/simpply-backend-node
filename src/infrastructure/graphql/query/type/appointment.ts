import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
} from "graphql";

const Appointment = new GraphQLObjectType({
  name: "Appointment",
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLID),
    },
    createdTime: {
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});

export { Appointment };
