try {
    function f0() {
    }
    var desc = Object.getOwnPropertyDescriptor(Function.prototype, "length");
    const v11 = { value: 0, writable: false, enumerable: false, configurable: true };
    Function.prototype.prototype;
    Function.prototype.callee;
    const v18 = () => {
        return Function.prototype?.caller;
    };
    v18();
    const v23 = () => {
        return Function.prototype?.arguments;
    };
    v23();
    if (typeof f0 === "function") {
        f0(true, true);
    }
} catch(e33) {
}
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
// EXECUTION TIME: 181ms
