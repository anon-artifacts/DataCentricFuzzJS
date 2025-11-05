var BUGNUMBER = 380933;
var summary = "Do not assert with uneval object with setter with modified proto";
printBugNumber(BUGNUMBER);
printStatus(summary);
function f8() {
}
var f = f8;
const v10 = {};
var y = Object.defineProperty(v10, "p", { get: f, enumerable: true, configurable: true });
f.__proto__ = [];
uneval(y);
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
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
// EXECUTION TIME: 157ms
