function f0(a1, a2) {
    return f0;
}
function f4() {
    function f6(a7) {
        f0(0, this);
        %PrepareFunctionForOptimization(f0);
        %OptimizeFunctionOnNextCall(f0);
        return 0;
    }
    this.onmessage = f6;
    return f4;
}
const v11 = [];
new Worker(f4, { arguments: v11, type: "function" });
