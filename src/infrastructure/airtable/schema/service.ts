type RecordDraft = {
  fields: {
    pk: string;
    name: string;
    description: string;
    price: number;
  };
};

type Record = RecordDraft & {
  id: string;
  createdTime: string;
};

type Service<R extends Record | RecordDraft> = {
  records: R[];
};

export { Service, Record, RecordDraft };
