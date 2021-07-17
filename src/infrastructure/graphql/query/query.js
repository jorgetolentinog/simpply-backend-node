const { GraphQLObjectType, GraphQLList } = require("graphql");
const { Service } = require("./type/service");
const { app } = require("../../../app");

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    services: {
      type: GraphQLList(Service),
      resolve: async () => {
        return await app.service.list();
      },
    },
  },
});

module.exports = { Query };
