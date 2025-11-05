function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a5;
    this.h = a5;
}
const v6 = new F3(9223372036854775807n);
const v7 = new F3(11440n);
new F3(9223372036854775807n);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v6;
    this.b = a12;
}
const v13 = new F9(11440n, 9223372036854775807n);
new WeakSet();
try {
    v6.m(v13, v7);
} catch(e17) {
}
new F9(5n, 9223372036854775807n);
new F9(11440n, 11440n);
function f20() {
}
var BUGNUMBER = 1151149;
const v24 = %WasmStruct();
let v26 = -256;
Math.hypot(5.478586512272975e+307);
Math.round(5.478586512272975e+307 * "Proxy constructor should throw if either the target or handler is a revoked proxy.");
Math.fround("Proxy constructor should throw if either the target or handler is a revoked proxy.");
5.478586512272975e+307 ** v26;
v26--;
var summary = "Proxy constructor should throw if either the target or handler is a revoked proxy.";
let v36 = ": ";
const v38 = (BUGNUMBER + v36) + summary;
try { f20(v38); } catch (e) {}
v36[536870912] ^= -268435456;
v36 ??= "Proxy constructor should throw if either the target or handler is a revoked proxy.";
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
// EXECUTION TIME: 155ms
