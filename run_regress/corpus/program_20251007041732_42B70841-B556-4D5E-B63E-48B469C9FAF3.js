function f0(a1) {
    return f0;
}
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
