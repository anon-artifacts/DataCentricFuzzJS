var val = { x: 0 };
function foo(v) {
  v += 1;
  v += 1;
  val.x = v;
}

%PrepareFunctionForOptimization(foo);
foo(1073741823);
%OptimizeFunctionOnNextCall(foo);
foo();
print(val.x);