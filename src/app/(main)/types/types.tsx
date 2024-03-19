export type errorType<T> =
  | { status: "success"; data: T }
  | { status: "failed"; data: T };
