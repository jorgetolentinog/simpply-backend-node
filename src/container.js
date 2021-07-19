const awilix = require("awilix");
const { AppointmentService } = require("./service/appointment");
const { ServiceService } = require("./service/service");
const { AppointmentRepository } = require("./repository/appointment");
const {
  AppointmentPatientRepository,
} = require("./repository/appointment-patient");
const { PatientRepository } = require("./repository/patient");
const { ServiceRepository } = require("./repository/service");
const { yup } = require("./infrastructure/validator/yup");
const { Airtable } = require("./infrastructure/airtable");

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

// Base
container.register({
  yup: awilix.asValue(yup),
  airtable: awilix.asClass(Airtable),
});

// Appointment
container.register({
  appointmentService: awilix.asClass(AppointmentService),
  appointmentRepository: awilix.asClass(AppointmentRepository),
});

// Appointment Patient
container.register({
  appointmentPatientRepository: awilix.asClass(AppointmentPatientRepository),
});

// Patient
container.register({
  patientRepository: awilix.asClass(PatientRepository),
});

// Service
container.register({
  serviceService: awilix.asClass(ServiceService),
  serviceRepository: awilix.asClass(ServiceRepository),
});

module.exports = { container };
