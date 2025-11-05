var a = [0,,];
function foo(i) {
 return a[i] + 2147483647;
}
%PrepareFunctionForOptimization(foo);
foo(0);
%OptimizeFunctionOnNextCall(foo);
print(foo(1));