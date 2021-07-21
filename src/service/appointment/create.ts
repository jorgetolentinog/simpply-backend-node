import { injectable } from "tsyringe";
import { AppointmentPatientRepositoryCreateBulk } from "@/infrastructure/airtable/repository/appointment-patient/create-bulk";
import { AppointmentRepositoryCreate } from "@/infrastructure/airtable/repository/appointment/create";
import { PatientRepositoryCreateBulk } from "@/infrastructure/airtable/repository/patient/create-bulk";
import { PatientRepositorySearchByDocument } from "@/infrastructure/airtable/repository/patient/search-by-document";
import { z } from "zod";
import { Logger } from "@/infrastructure/logger/logger";

const schema = z.object({
  date: z.string(),
  serviceId: z.string(),
  patients: z.array(
    z.object({
      documentType: z.string(),
      document: z.string(),
      firstName: z.string(),
      lastName: z.string(),
      email: z.string().email(),
      phone: z.string(),
      birthdate: z.string(),
      address: z.string(),
      addressNumber: z.string(),
    })
  ),
});

type HandleInput = z.infer<typeof schema>;
type HandleInputPatients = z.infer<typeof schema.shape.patients>;

@injectable()
class AppointmentServiceCreate {
  constructor(
    private appointmentRepositoryCreate: AppointmentRepositoryCreate,
    private appointmentPatientRepositoryCreateBulk: AppointmentPatientRepositoryCreateBulk,
    private patientRepositorySearchByDocument: PatientRepositorySearchByDocument,
    private patientRepositoryCreateBulk: PatientRepositoryCreateBulk,
    private logger: Logger
  ) {}

  async handle(params: HandleInput) {
    schema.parse(params);

    const patientsId = await this.getOrCreatePatients(params.patients);
    const appointment = await this.appointmentRepositoryCreate.handle({
      date: params.date,
      serviceId: params.serviceId,
    });
    this.logger.debug("Nueva cita", appointment);

    await this.appointmentPatientRepositoryCreateBulk.handle(
      patientsId.map((patientId) => ({
        appointmentId: appointment.id,
        patientId: patientId,
      }))
    );

    return {
      id: appointment.id,
    };
  }

  private async getOrCreatePatients(patients: HandleInputPatients) {
    const patientsId = [];
    const existingPatients =
      await this.patientRepositorySearchByDocument.handle(
        patients.map((p) => ({
          document: p.document,
          documentType: p.documentType,
        }))
      );

    const patientsToCreate = [];
    for (let p of patients) {
      let exists = false;
      for (let ep of existingPatients) {
        if (p.document === ep.document && p.documentType === ep.documentType) {
          patientsId.push(ep.id);
          exists = true;
          break;
        }
      }

      if (!exists) {
        patientsToCreate.push(p);
      }
    }

    this.logger.debug("Pacientes a crear", patientsToCreate.length);
    if (patientsToCreate.length > 0) {
      const newPatients = await this.patientRepositoryCreateBulk.handle(
        patientsToCreate
      );
      for (let np of newPatients) {
        patientsId.push(np.id);
      }
    }
    return patientsId;
  }
}

export { AppointmentServiceCreate };
