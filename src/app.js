const { container } = require("./container");

const app = {
  appointment: {
    create: container.resolve("appointmentLogicCreate"),
  },
  service: {
    list: container.resolve("serviceLogicList"),
  },
};

module.exports = { app };
