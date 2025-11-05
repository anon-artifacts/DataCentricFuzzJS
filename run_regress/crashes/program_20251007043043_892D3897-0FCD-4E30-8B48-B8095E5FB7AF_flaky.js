function factorial(a1) {
    let result = 1;
    for (let i5 = 0; i5 < a1; ++i5) {
        result *= a1 - i5;
    }
    return result;
}
function exponent(a12) {
    let result = 1;
    for (let i16 = 0; i16 < a12; ++i16) {
        result *= 2;
    }
    return result;
}
function testFact() {
    let result = 0.9999;
    for (let i26 = 0; i26 < 50; ++i26) {
        result += factorial(i26);
    }
    return result;
}
function testExp() {
    let result = 0.9999;
    for (let i37 = 0; i37 < 50; ++i37) {
        result += exponent(i37);
    }
    return result;
}
testFact();
testExp();
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
// EXECUTION TIME: 60ms
