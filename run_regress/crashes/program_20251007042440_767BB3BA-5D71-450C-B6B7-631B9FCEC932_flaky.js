function f0() {
}
function f3() {
    return "get-x";
}
const v6 = { get: f3, configurable: true };
try { Object.defineProperty(this, "x", v6); } catch (e) {}
const v9 = `{\n  function x() { return "fun-x"; }\n}`;
try { evaluate(v9); } catch (e) {}
try { f0(x, "get-x"); } catch (e) {}
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
// EXECUTION TIME: 153ms
