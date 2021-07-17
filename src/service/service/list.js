function ServiceServiceList({ serviceRepositoryList }) {
  return async () => {
    const result = await serviceRepositoryList();
    return result;
  };
}

module.exports = { ServiceServiceList };
