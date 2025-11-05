let v1;
try { v1 = new Map(); } catch (e) {}
let v2;
try { v2 = v1.toString(); } catch (e) {}
var x = v2;
for (let i5 = 0; i5 < 10; i5++) {
    let v12;
    try { v12 = new Set(); } catch (e) {}
    var tmp = v12;
    let v14;
    try { v14 = tmp.toString(); } catch (e) {}
    tmp = v14;
}
try { console.log(x); } catch (e) {}
try { WScript.Echo("pass"); } catch (e) {}
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
// EXECUTION TIME: 126ms
