function main() {
  var v0 = [function f0() {
    throw new Error();
  }, function f1() {
    v0[0]();
  }, function f2() {
    v0[1]();
  }, function f3() {
    v0[2]();
  }];
    Error.prepareStackTrace = function (v1, v2) {
        for (var v3 = 0; v3 < v2.length - 1; v3++) {
          v0[v3], v2[v3].getFunction();
          v3 = v3, gc();
        }
    };
  try {
    v0[3]();
  } catch (v5) {
    v5.stack;
  }
  var v0 = [function f4() { }, function f5() { }, function f6() {
    "use strict";
  }, function f7() {
    v0[3]();
  }];
  try {
    Error.prepareStackTrace = function (v11, v12) {
      v12 = v12, gc();
    };
  } catch (v15) { }
  try {
    v0[3]();
  } catch (v16) {
    v16.stack;
  }
}
main();
%PrepareFunctionForOptimization(main);
main();
%OptimizeMaglevOnNextCall(main);
main();
//flags: --allow-natives-syntax --expose-gc --maglev-inline-api-calls