var obj = {};
obj.valueOf = function () {
  print("Called valueOf");
};

function foo() {
  "" + obj;
}
%PrepareFunctionForOptimization(foo);
foo();
%OptimizeMaglevOnNextCall(foo);
foo();