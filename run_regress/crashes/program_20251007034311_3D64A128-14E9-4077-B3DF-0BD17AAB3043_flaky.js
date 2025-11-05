var runningJITtedCode = false;
function test0() {
    function f3() {
        var v3877 = runningJITtedCode;
        function v3878() {
            function v3879() {
                return v3879;
            }
            if (v3877) {
                return v3879();
            }
        }
        var v3880 = v3878();
    }
    var func0 = f3;
    function f11() {
        func0();
    }
    var func2 = f11;
    func0.call(func2.call());
}
test0();
runningJITtedCode = true;
test0();
print("pass");
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
