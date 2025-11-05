function Foo() {
    this.f = 42;
}
function bar() {
    let v4;
    try { v4 = new Foo(); } catch (e) {}
    return v4;
}
try { noInline(Foo); } catch (e) {}
try { noInline(bar); } catch (e) {}
function f8() {
    for (let i10 = 0; i10 < 10000000; ++i10) {
        let v16;
        try { v16 = bar(); } catch (e) {}
        var result = v16;
        if (result?.f != 42) {
            throw "Error: bad result: " + result;
        }
    }
}
try { f8(); } catch (e) {}
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
// EXECUTION TIME: 131ms
