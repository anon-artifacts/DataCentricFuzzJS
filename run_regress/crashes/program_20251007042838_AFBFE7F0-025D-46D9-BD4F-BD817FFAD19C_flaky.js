const v2 = new Uint32Array(1);
var array = v2;
function foo(a5) {
    array[0] = a5;
    return array[0];
}
function test(a8, a9) {
    var result = foo(a8);
    if (result != a9) {
        throw (((("Error: " + a8) + " was supposed to result in ") + a9) + " but instead got ") + result;
    }
}
for (let i22 = 0; i22 < 100000; ++i22) {
    test(i22 + 0.5, i22);
}
test(0, 0);
test(100.5, 100);
test(-100.5, 4294967196);
test(3000000000, 3000000000);
test(6000000000, 1705032704);
test(-3000000000, 1294967296);
test(-2147483648, 2147483648);
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
// EXECUTION TIME: 143ms
