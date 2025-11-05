function f0() {
}
var BUGNUMBER = 317476;
var summary = "The error thrown by JS_ReportError should be catchable";
var actual = "no error";
var expect = "no error";
f0(BUGNUMBER);
f0(summary);
if (typeof setTimeout != "undefined") {
    expect = "error";
    try {
        setTimeout();
    } catch(e17) {
        actual = "error";
        f0(e17 + "");
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
// EXECUTION TIME: 70ms
