function f1(a2) {
    var x = 0;
    var n = 1000000;
    for (let i8 = 0; i8 < n; ++i8) {
        x += Math.min(a2, 42);
    }
    if (x != n) {
        throw "Error: bad result: " + x;
    }
}
f1(true);
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
// #FailureMessage Object: 0x7f0adb732700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55b9e61a3a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55b9e61a22a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55b9e6196546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55b9e6195d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55b9e7caf13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55b9e807a7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55b9e7c0c3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55b9e7bba150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55b9e7bb6fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55b9e790d5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55b9e79047e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55b9e6382cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55b9e7907588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55b9e61a714f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55b9e61b2925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55b9e619f650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f0aea2f4ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f0aea386850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 120ms
