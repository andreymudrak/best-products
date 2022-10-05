export interface ProcessError {
  errorMessage: string;
  status: number | null;
}

export interface Response<T> {
  data?: T;
  error?: ProcessError;
}

export interface IColumnValue {
  v: string | number | Date;
  f: string | number | Date;
}

export interface IColumns {
  c: IColumnValue[];
}