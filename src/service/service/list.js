function ServiceServiceList({ serviceRepository }) {
  return async () => {
    const result = await serviceRepository.list();
    return result;
  };
}

module.exports = { ServiceServiceList };
