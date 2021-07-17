const awilix = require("awilix");
const appointmentLogic = require("./service/appointment");
const appointmentRepository = require("./repository/appointment");
const appointmentPatientRepository = require("./repository/appointment-patient");
const patientRepository = require("./repository/patient");
const serviceLogic = require("./service/service");
const serviceRepository = require("./repository/service");
const { airtableAPI } = require("./infrastructure/airtable/api");

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

// Base
container.register({
  airtableAPI: awilix.asValue(airtableAPI),
});

// Appointment
container.register({
  appointmentLogicCreate: awilix.asFunction(
    appointmentLogic.AppointmentLogicCreate
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
  serviceLogicList: awilix.asFunction(serviceLogic.ServiceLogicList),
  serviceRepositoryList: awilix.asFunction(
    serviceRepository.ServiceRepositoryList
  ),
});

module.exports = { container };
