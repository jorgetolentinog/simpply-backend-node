interface IAppointmentRecordUnregistered {
  fields: {
    date: string;
    service_id: string[];
  };
}

interface IAppointmentRecordRegistered extends IAppointmentRecordUnregistered {
  id: string;
  createdTime: string;
}

type IAppointmentRecord =
  | IAppointmentRecordUnregistered
  | IAppointmentRecordRegistered;

interface IAppointment {
  records: IAppointmentRecord[];
}

export {
  IAppointment,
  IAppointmentRecordRegistered,
  IAppointmentRecordUnregistered,
};
