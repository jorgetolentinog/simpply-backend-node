const { GraphQLObjectType, GraphQLList } = require("graphql");
const { ServiceType } = require("./type/ServiceType");
const { app } = require("../../../app");

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    services: {
      type: GraphQLList(ServiceType),
      resolve: async () => {
        return await app.service.list();
      },
    },
  },
});

module.exports = { QueryType };
