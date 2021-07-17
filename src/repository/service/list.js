function ServiceRepositoryList({ airtableAPI }) {
  return async () => {
    const resp = await airtableAPI.get("service?view=Grid%20view");
    return resp.data.records.map((o) => ({
      id: o.id,
      pk: o.fields.pk,
      name: o.fields.name,
      description: o.fields.description,
      price: o.fields.price,
      createdTime: o.createdTime,
    }));
  };
}

module.exports = { ServiceRepositoryList };
