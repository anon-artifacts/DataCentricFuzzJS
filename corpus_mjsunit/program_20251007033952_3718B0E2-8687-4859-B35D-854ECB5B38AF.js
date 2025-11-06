new BigInt64Array(156);
const v5 = new BigInt64Array(4096);
const v8 = new BigInt64Array(138);
function f9() {
    var ival = -2147483648 + 8;
    for (let i16 = 0; i16 < 30; i16++) {
        ival -= 2;
    }
    return ival > -2147483648;
}
const v26 = f9();
const v27 = %WasmArray();
try { new v27(...v8, ...f9, 156, v27, ...v8); } catch (e) {}
Object.defineProperty(v8, f9, { configurable: true, enumerable: true, value: v26 });
v5.findLast(f9);
f9();
%PrepareFunctionForOptimization(f9);
f9();
%OptimizeMaglevOnNextCall(f9);
