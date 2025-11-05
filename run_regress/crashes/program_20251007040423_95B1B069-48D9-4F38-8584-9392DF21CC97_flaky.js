function f0() {
}
var BUGNUMBER = 260541;
var summary = "Recursive Error object should not crash";
var actual = "Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
const v13 = new Error("Error Text");
var myErr = v13;
myErr.name = myErr;
f0(expect, actual = "No Crash", summary);
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
// EXECUTION TIME: 159ms
