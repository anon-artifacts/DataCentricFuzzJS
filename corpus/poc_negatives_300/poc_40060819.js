function __f_0() {
    var __v_1;
    try {
      class __c_0 extends (
      __v_1 = function () {
      }, __v_4) {}
    } catch (__v_5) {
      try {
        __v_1 = __v_5;
      } catch (e) {}
    }
    try {
      Object.defineProperty(__v_2, 'x', {
        value: 1
      });
      Object.defineProperty(__v_2, 'x', {
      });
    } catch (e) {}
    try {
      class __c_2 extends (eval('delete obj.x'), class {}) {}
    } catch (__v_7) {
      __v_1 = __v_7;
    }
}
%PrepareFunctionForOptimization(__f_0);
      __f_0();
%OptimizeMaglevOnNextCall(__f_0);
__f_0();