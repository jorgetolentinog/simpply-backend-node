function ServiceRepositoryList({ airtableAPI }) {
  return async () => {
    const resp = await airtableAPI.get("service?view=Grid%20view");
    return resp.data.records;
  };
}

module.exports = { ServiceRepositoryList };
