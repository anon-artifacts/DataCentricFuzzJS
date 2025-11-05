function deferredWithRegex() {
    const v2 = /[\uD800\uDC00\uFFFF]/;
    let v3;
    try { v3 = v2.test("￿"); } catch (e) {}
    return v3;
}
let v4;
try { v4 = deferredWithRegex(); } catch (e) {}
if (v4) {
    try { WScript.Echo("Pass"); } catch (e) {}
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
// #FailureMessage Object: 0x7f5cec7a2700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x564e06aeaa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x564e06ae92a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x564e06add546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x564e06adcd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x564e085f613e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x564e089c17a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x564e085533eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x564e08501150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x564e084fdfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x564e082545d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x564e0824b7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x564e06cc9cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x564e0824e588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x564e06aee14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x564e06af9925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x564e06ae6650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f5cf6b5bac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f5cf6bed850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 215ms
