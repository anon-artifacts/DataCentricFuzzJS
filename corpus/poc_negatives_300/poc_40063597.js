const __v_1 = {};

function f() {
  try {
    var __v_6 = Object.defineProperties([0,0], { 1: __v_1 });
  } catch (e1) {}
  try {
    for (var __v_7 in __v_6) {
      try {
        __v_1 = 4;
      } catch (e2) {}
      __v_6 = __v_7;
      try {
        if (__v_7 === "0") {
          try {
            Object.defineProperties();
          } catch (e3) {}
        }
      } catch (e4) {}
    }
  } catch (e5) {}
  __v_6[0];
}

%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();