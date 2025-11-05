function f0() {
}
const v3 = { x: true };
const v5 = Symbol.unscopables;
with ({ x: 1, [v5]: v3 }) {
    const v7 = () => {
        return x;
    };
    try { v7(); } catch (e) {}
}
f0(0, 0);
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
// #FailureMessage Object: 0x7fa0f7f97700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55c5d88a9a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55c5d88a82a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55c5d889c546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55c5d889bd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55c5da3b513e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55c5da7807a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55c5da3123eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55c5da2c0150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55c5da2bcfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55c5da0135d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55c5da00a7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55c5d8a88cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55c5da00d588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55c5d88ad14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55c5d88b8925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55c5d88a5650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fa103352ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fa1033e4850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 156ms
