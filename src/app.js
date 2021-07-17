const { container } = require("./container");

const app = {
  appointment: {
    create: container.resolve("appointmentServiceCreate"),
  },
  service: {
    list: container.resolve("serviceServiceList"),
  },
};

module.exports = { app };
