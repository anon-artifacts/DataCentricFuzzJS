function f0() {
}
function foo(a2) {
    let v4;
    try { v4 = new Array(a2); } catch (e) {}
    return v4;
}
try { noInline(foo); } catch (e) {}
function test(a8) {
    let v9;
    try { v9 = foo(a8); } catch (e) {}
    var result = v9;
    if (result?.length != a8) {
        const v15 = "Got a weird length: " + result?.length;
        try { f0(v15); } catch (e) {}
        throw "Error: bad result: " + result;
    }
    var sawThings = false;
    for (const v21 in result) {
        sawThings = true;
    }
    if (sawThings) {
        try { f0("Saw things!"); } catch (e) {}
        throw "Error: array is in bad state: " + result;
    }
    result[0] = "42.5";
    if (result?.[0] != "42.5") {
        try { f0("Didn't store what I thought I stored."); } catch (e) {}
        throw "Error: array is in wierd state: " + result;
    }
}
for (let i36 = 0; i36 < 100000; ++i36) {
    try { test(0); } catch (e) {}
    try { test(1); } catch (e) {}
    try { test(42); } catch (e) {}
}
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// #
// # Fatal error in ../../src/maglev/maglev-assembler-inl.h, line 777
// # Debug check failed: !allow_allocate() implies builtin == Builtin::kDoubleToI || !BuiltinCanAllocate(builtin).
// #
// #
// #
// #FailureMessage Object: 0x7fe7d87d7700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x561c49b7ca82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x561c49b7b2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x561c49b6f546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x561c49b6ed95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x561c4b68813e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x561c4ba537a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x561c4b5e53eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x561c4b593150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x561c4b58ffd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x561c4b2e65d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x561c4b2dd7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x561c49d5bcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x561c4b2e0588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x561c49b8014f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x561c49b8b925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x561c49b78650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fe7e6397ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fe7e6429850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 148ms
