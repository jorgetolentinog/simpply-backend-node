const { container } = require("./container");

const app = {
  appointment: {
    create: container.resolve("appointmentLogicCreate"),
  },
};

module.exports = { app };
