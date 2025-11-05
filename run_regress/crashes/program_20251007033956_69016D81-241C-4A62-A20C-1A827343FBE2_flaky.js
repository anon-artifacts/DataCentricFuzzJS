function test() {
    const foo = 123;
    return foo === 123;
}
if (!test()) {
    const v9 = new Error("Test failed");
    throw v9;
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
// #FailureMessage Object: 0x7fa06e266700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55c2c3e31a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55c2c3e302a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55c2c3e24546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55c2c3e23d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55c2c593d13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55c2c5d087a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55c2c589a3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55c2c5848150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55c2c5844fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55c2c559b5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55c2c55927e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55c2c4010cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55c2c5595588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55c2c3e3514f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55c2c3e40925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55c2c3e2d650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fa07c627ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fa07c6b9850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 133ms
