import {
  FALSY_NIL_VALUES,
  FALSY_NONNIL_VALUES,
  FALSY_VALUES,
  and,
  areAllFalsy,
  areAllTruthy,
  isAnyFalsy,
  isAnyTruthy,
  or,
  xnor,
} from "./barrel";

const TRUTHY_VALUES = [true, {}, [], 1, Infinity, -Infinity, " "];

const PARAMS = [...FALSY_VALUES, ...TRUTHY_VALUES, ...TRUTHY_VALUES];

const TWICE_PARAM_SCENARIOS = [
  { func: and, return: (a: any, b: any) => a && b },
  { func: or, return: (a: any, b: any) => a || b },
  { func: xnor, return: (a: any, b: any) => (!a && !b) || (a && b) },
];

for (let { func, return: ret } of TWICE_PARAM_SCENARIOS) {
  describe(`Test of ${func.name}`, () => {
    for (let param1 of PARAMS) {
      for (let param2 of PARAMS) {
        const _ret = ret(param1, param2);
        it(`when invoked with '${param1}' and '${param2}', it must return: '${_ret}'`, () =>
          expect(func(param1, param2)).toEqual(_ret));
      }
    }
  });
}

const ARGUMENT_LIST = [
  TRUTHY_VALUES,
  FALSY_VALUES,
  FALSY_NIL_VALUES,
  FALSY_NONNIL_VALUES,
  PARAMS,
];

const REST_PARAM_SCENARIOS = [
  {
    func: areAllTruthy,
    returns: [true, false, false, false, false],
  },
  {
    func: areAllFalsy,
    returns: [false, true, true, true, false],
  },
  {
    func: isAnyTruthy,
    returns: [true, false, false, false, true],
  },
  {
    func: isAnyFalsy,
    returns: [false, true, true, true, true],
  },
];

for (let { func, returns } of REST_PARAM_SCENARIOS) {
  describe(`Test of '${func.name}'`, () => {
    for (let x = 0; x < ARGUMENT_LIST.length; x++) {
      it(`with '${ARGUMENT_LIST[x]}', it must return '${returns[x]}'`, () =>
        expect(func(...ARGUMENT_LIST[x])).toEqual(returns[x]));
    }
  });
}
