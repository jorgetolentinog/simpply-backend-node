function AppointmentPatientRepositoryCreateBulk({ airtable, yup }) {
  const schema = yup
    .array()
    .of(
      yup.object({
        appointmentId: yup.string().required(),
        patientId: yup.string().required(),
      })
    )
    .strict();

  return async (elements) => {
    await schema.validate(elements);

    const body = {
      records: elements.map((o) => ({
        fields: {
          appointment_id: [o.appointmentId],
          patient_id: [o.patientId],
        },
      })),
    };

    await airtable.schema.appointmentPatient.validate(body);
    const resp = await airtable.http.post("appointment_patient", body);
    return resp.data.records.map((o) => ({
      id: o.id,
    }));
  };
}

module.exports = { AppointmentPatientRepositoryCreateBulk };
