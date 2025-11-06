class C1 {
    #m() {
    }
}
const v3 = new C1();
function f4(a5) {
    const v6 = { c: a5, [a5]: a5, d: v3, [false]: C1 };
}
f4(C1);
f4();
%PrepareFunctionForOptimization(f4);
%OptimizeFunctionOnNextCall(f4);
f4();
function f11() {
}
for (let v15 = 0; v15 < 25; v15++) {
    v15 < 10000000;
    f11();
}
