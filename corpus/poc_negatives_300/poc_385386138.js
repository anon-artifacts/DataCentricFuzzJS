function foo() {
  let val = [];
  val.__proto__ = RegExp();
  return Math.max(...val);
}

%PrepareFunctionForOptimization(foo);
try {
  foo();
} catch (e) {}
%OptimizeFunctionOnNextCall(foo);
foo();