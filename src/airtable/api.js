const axios = require("axios");

const airtableAPI = axios.create({
  baseURL: "https://api.airtable.com/v0/appgUUt9aJtuOxtnD/",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer keyMxMQ7eexdbC70J",
  },
});

function normalizeRecord(record) {
  const element = {};
  element["_id"] = record.id;
  element["createdTime"] = record.createdTime;
  for (let field of Object.keys(record.fields)) {
    element[field] = record.fields[field];
  }
  return element;
}

function normalizeRecords(records) {
  const result = [];
  for (let record of records) {
    result.push(normalizeRecord(record));
  }
  return result;
}

module.exports = { airtableAPI, normalizeRecords, normalizeRecord };
