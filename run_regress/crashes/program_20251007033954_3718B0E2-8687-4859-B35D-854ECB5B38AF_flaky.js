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
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// 
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 119ms
