const awilix = require("awilix");
const appointmentService = require("./service/appointment");
const serviceService = require("./service/service");
const appointmentRepository = require("./repository/appointment");
const appointmentPatientRepository = require("./repository/appointment-patient");
const patientRepository = require("./repository/patient");
const serviceRepository = require("./repository/service");
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

container.register("aa.bb", awilix.asFunction(Airtable));

// Appointment
container.register({
  appointmentServiceCreate: awilix.asFunction(
    appointmentService.AppointmentServiceCreate
  ),
  appointmentRepositoryCreate: awilix.asFunction(
    appointmentRepository.AppointmentRepositoryCreate
  ),
});

// Appointment Patient
container.register({
  appointmentPatientRepositoryCreateBulk: awilix.asFunction(
    appointmentPatientRepository.AppointmentPatientRepositoryCreateBulk
  ),
});

// Patient
container.register({
  patientRepositoryCreateBulk: awilix.asFunction(
    patientRepository.PatientRepositoryCreateBulk
  ),
  patientRepositorySearchByDocument: awilix.asFunction(
    patientRepository.PatientRepositorySearchByDocument
  ),
});

// Service
container.register({
  serviceServiceList: awilix.asFunction(serviceService.ServiceServiceList),
  serviceRepositoryList: awilix.asFunction(
    serviceRepository.ServiceRepositoryList
  ),
});

module.exports = { container };
