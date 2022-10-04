export interface ProcessError {
  errorMessage: string;
  status: number | null;
}

export interface Response<T> {
  data?: T;
  error?: ProcessError;
}