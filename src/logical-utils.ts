export const FALSY_NONNIL_VALUES = Object.freeze([false, NaN, 0, ""]);

export const FALSY_NIL_VALUES = Object.freeze([undefined, null]);

export const FALSY_VALUES = Object.freeze([
  ...FALSY_NONNIL_VALUES,
  ...FALSY_NIL_VALUES,
]);

export const and = <T = any>(a: T, b: T) => a && b;

export const or = <T = any>(a: T, b: T) => a || b;

export const xnor = <T = any>(a: T, b: T) => (!a && !b) || (a && b);

export const areAllTruthy = <T = any>(...args: T[]) =>
  args?.length ? args?.every?.((e) => e) : false;

export const areAllFalsy = <T = any>(...args: T[]) =>
  args?.every?.((e) => !e) ?? true;

export const isAnyTruthy = <T = any>(...args: T[]) =>
  args?.length ? args?.some?.((e) => e) : false;

export const isAnyFalsy = <T = any>(...args: T[]) =>
  args?.some?.((e) => !e) ?? true;
