const { container } = require("./container");

const app = {
  appointment: container.resolve("appointmentService"),
  service: container.resolve("serviceService"),
};

module.exports = { app };
