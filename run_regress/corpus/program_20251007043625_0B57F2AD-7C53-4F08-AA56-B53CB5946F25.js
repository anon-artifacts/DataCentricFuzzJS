function f0() {
}
for (let v1 = 0; v1 < 5; v1++) {
    f0();
    %PrepareFunctionForOptimization(f0);
    %OptimizeFunctionOnNextCall(f0);
}
