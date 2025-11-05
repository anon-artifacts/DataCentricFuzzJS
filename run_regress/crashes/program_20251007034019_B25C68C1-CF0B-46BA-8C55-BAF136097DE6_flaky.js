function baz(a1, a2) {
    for (let i4 = 0; i4 < a1.length; i4++) {
        a1[i4];
        if (a2[i4]) {
            return false;
        }
    }
}
function bar(a14, a15) {
    if (!baz(a15, a14)) {
    }
}
bar([{},6,NaN], [1.8,,NaN]);
function foo() {
    var a = [1,2,3,4];
    bar(a.length, a.length);
}
foo();
foo();
foo();
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
// EXECUTION TIME: 205ms
