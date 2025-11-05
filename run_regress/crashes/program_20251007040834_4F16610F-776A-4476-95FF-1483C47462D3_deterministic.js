function test0() {
    const t1 = Number(1);
    t1.__parent__ = "";
    for (const v6 in [""]) {
    }
    return 1518500249 in [];
}
for (let i11 = 0; i11 < 1000; ++i11) {
    test0();
}
console.log("pass");
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// [COV] edge counters initialized. Shared memory: shm_id_1162266_0 with 1587369 edges
// V8 is running with experimental features enabled. Stability and security will suffer.
// 
// 
// #
// # Fatal error in ../../src/maglev/maglev-assembler-inl.h, line 777
// # Debug check failed: !allow_allocate() implies builtin == Builtin::kDoubleToI || !BuiltinCanAllocate(builtin).
// #
// #
// #
// #FailureMessage Object: 0x7f0b0e2e3700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5584c3dada82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5584c3dac2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5584c3da0546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5584c3d9fd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5584c58b913e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5584c5c847a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5584c58163eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5584c57c4150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5584c57c0fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5584c55175d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5584c550e7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5584c3f8ccb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5584c5511588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5584c3db114f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5584c3dbc925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5584c3da9650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f0b1a6a0ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f0b1a732850]
// Received signal 6
// STDOUT:
// Warning: unknown flag --experimental-wasm-memory64.
// Try --help for options
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 213ms
