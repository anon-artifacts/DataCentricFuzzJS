function f0() {
}
var BUGNUMBER = 338804;
var summary = "GC hazards in constructor functions";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
if (typeof Script != "undefined") {
    Script({ toString: fillHeap });
}
RegExp({ toString: fillHeap });
function fillHeap() {
    if (typeof gc == "function") {
        gc();
    }
    var x = 1;
    var tmp;
    for (let i33 = 0; i33 != 50000; ++i33) {
        tmp = x / 3;
    }
}
f0(expect, actual, summary);
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
// EXECUTION TIME: 122ms
