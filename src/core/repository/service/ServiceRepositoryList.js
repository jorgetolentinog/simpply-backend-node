const axios = require("axios");
const { airtableAPI, normalizeRecords } = require("../../../airtable/api");

function ServiceRepositoryList() {
  return async () => {
    const resp = await airtableAPI.get("service?maxRecords=3&view=Grid%20view");
    return resp.data.records;
  };
}

module.exports = { ServiceRepositoryList };
