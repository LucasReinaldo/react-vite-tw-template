/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  type Prettify<T> = { [K in keyof T]: T[K] } & unknown;

  // eslint-disable-next-line @typescript-eslint/ban-types
  type AsEnum<T> = T | (string & {});
}
