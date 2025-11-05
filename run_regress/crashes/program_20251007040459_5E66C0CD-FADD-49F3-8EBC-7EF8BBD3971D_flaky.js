var object = {};
function f2() {
    var result = 0;
    for (let i6 = 0; i6 < 1000000; ++i6) {
        var value1 = i6 & 1 ? 42.5 : 42;
        var value2 = i6 & 1 ? "hello" : object;
        result += typeof value1 == "number";
        result += (typeof value2 == "number") << 1;
    }
    if (result != 1000000) {
        throw "Error: bad result: " + result;
    }
}
f2();
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
// EXECUTION TIME: 128ms
