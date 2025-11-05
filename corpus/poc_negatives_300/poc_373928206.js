const o0 = {
};
const v3 = [-1];
function f4() {
    (o0[65535] | 65535) / v3[2147483648];
}
const v10 = %PrepareFunctionForOptimization(f4);
f4();
f4();
const v13 = %OptimizeFunctionOnNextCall(f4);
f4();
//run ./d8 --allow-natives-syntax --fuzzing --optimize-on-next-call-optimizes-to-maglev --max-lazy poc.js