export type StateKey<T extends Record<string, any>> = keyof T;
export type StateKeyOrKeys<T extends Record<string, any>> =
  | StateKey<T>
  | StateKey<T>[];