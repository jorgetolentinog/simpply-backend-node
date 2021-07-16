const {
  ServiceRepositoryList,
} = require("../../repository/service/ServiceRepositoryList");

function ServiceLogicList() {
  const serviceRepositoryList = ServiceRepositoryList();

  return async () => {
    const result = await serviceRepositoryList();
    return result.map((o) => ({
      id: o.id,
      pk: o.fields.pk,
      name: o.fields.name,
      description: o.fields.description,
      price: o.fields.price,
      createdTime: o.createdTime,
    }));
  };
}

module.exports = { ServiceLogicList };
