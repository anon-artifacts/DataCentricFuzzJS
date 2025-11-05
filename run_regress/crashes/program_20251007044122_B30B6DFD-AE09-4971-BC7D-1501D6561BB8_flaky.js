const v0 = [2,51307,-64219,-2147483648];
const v1 = [724740099];
const v2 = [0,-268435456,-33716,51703,-9007199254740991,-24844,-2147483647];
function f4(a5, a6, a7, a8) {
    a8[0] = a8;
    const v9 = { __proto__: a8 };
}
f4(v0, v2, v0, v1);
f4(v2, v0, -7623, v1);
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
