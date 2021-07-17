const {
  AppointmentPatientListSchema,
} = require("../../infrastructure/airtable/schema");

function AppointmentPatientRepositoryCreateBulk({ airtableAPI }) {
  return async (elements) => {
    const records = elements.map((o) => ({
      fields: {
        appointment_id: [o.appointmentId],
        patient_id: [o.patientId],
      },
    }));

    await AppointmentPatientListSchema.validate(records, { strict: true });
    const resp = await airtableAPI.post("appointment_patient", {
      records: records,
    });
    return resp.data.records.map((o) => ({
      id: o.id,
    }));
  };
}

module.exports = { AppointmentPatientRepositoryCreateBulk };
