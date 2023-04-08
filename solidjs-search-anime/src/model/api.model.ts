export interface APIResponse<T> {
  response: T;
  error: {
    details: string;
  } | null;
}
