function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v6 = "bad value: " + a1;
        let v7;
        try { v7 = new Error(v6); } catch (e) {}
        throw v7;
    }
}
try { noInline(shouldBe); } catch (e) {}
function target(a11) {
    let v12;
    try { v12 = new a11(); } catch (e) {}
    return v12;
}
try { noInline(target); } catch (e) {}
for (let i15 = 0; i15 < 10000; ++i15) {
    let v22;
    try { v22 = target(Array); } catch (e) {}
    const v23 = v22?.length;
    try { shouldBe(v23, 0); } catch (e) {}
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
// EXECUTION TIME: 106ms
