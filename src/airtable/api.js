const axios = require("axios");

const airtableAPI = axios.create({
  baseURL: "https://api.airtable.com/v0/appgUUt9aJtuOxtnD/",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer keyMxMQ7eexdbC70J",
  },
});

module.exports = { airtableAPI };
