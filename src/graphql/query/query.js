const { GraphQLObjectType, GraphQLList, GraphQLID } = require("graphql");
const { ServiceType } = require("./type/ServiceType");
const {
  ServiceLogicList,
} = require("../../core/logic/service/ServiceLogicList");

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    services: {
      type: GraphQLList(ServiceType),
      resolve: async () => {
        const serviceLogicList = ServiceLogicList();
        return await serviceLogicList();
      },
    },
  },
});

module.exports = { QueryType };
