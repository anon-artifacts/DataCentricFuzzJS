console.log("Test that when the stack overflows, the exception goes to the last frame before the overflow");
var level = 0;
var stackLevel = 0;
var gotWrongCatch = false;
function test1() {
    var myLevel = level;
    var dummy;
    try {
        level = level + 1;
        if ((dummy = (level * level) + 1) == 0) {
            console.log("Should never get here!!!!");
        }
    } catch(e22) {
        gotWrongCatch = true;
    }
    try {
        test2();
    } catch(e26) {
        stackLevel = myLevel;
    }
}
function test2() {
    var myLevel = level;
    if (gotWrongCatch) {
        console.log("Should never get here!!!!");
    }
    try {
        level = level + 1;
    } catch(e33) {
        gotWrongCatch = true;
    }
    try {
        test1();
    } catch(e36) {
        stackLevel = myLevel;
    }
}
test1();
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
