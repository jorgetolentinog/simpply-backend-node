function AppointmentPatientRepositoryCreateBulk({ airtableAPI }) {
  return async (records) => {
    const body = {
      records: records.map((o) => ({
        fields: {
          appointment_id: [o.appointmentId],
          patient_id: [o.patientId],
        },
      })),
    };
    const resp = await airtableAPI.post("appointment_patient", body);
    return resp.data.records.map((o) => ({
      id: o.id,
    }));
  };
}

module.exports = { AppointmentPatientRepositoryCreateBulk };
