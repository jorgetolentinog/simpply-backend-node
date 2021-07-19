function AppointmentPatientRepositoryCreateBulk({ airtable, validator }) {
  const check = validator.compile({
    $$root: true,
    type: "array",
    items: {
      $$type: "object",
      appointmentId: "string",
      patientId: "string",
    },
  });

  return async (elements) => {
    const valid = check(elements);
    if (valid !== true) {
      throw new Error(valid[0].message);
    }

    const body = {
      records: elements.map((o) => ({
        fields: {
          appointment_id: [o.appointmentId],
          patient_id: [o.patientId],
        },
      })),
    };

    const appointmentPatientValid = await airtable.check.appointmentPatient(
      body
    );
    if (appointmentPatientValid !== true) {
      throw new Error(appointmentPatientValid[0].message);
    }

    const resp = await airtable.http.post("appointment_patient", body);
    return resp.data.records.map((o) => ({
      id: o.id,
    }));
  };
}

module.exports = { AppointmentPatientRepositoryCreateBulk };
