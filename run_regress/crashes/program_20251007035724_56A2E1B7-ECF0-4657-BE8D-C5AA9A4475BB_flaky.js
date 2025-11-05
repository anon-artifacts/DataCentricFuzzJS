function f0(a1) {
    return f0;
}
function f2() {
    f0.arguments.length;
    (3 && 14) && f0;
}
try { f2(); } catch (e) {}
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
// #FailureMessage Object: 0x7f2124ff7700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5570af6d5a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5570af6d42a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5570af6c8546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5570af6c7d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5570b11e113e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5570b15ac7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5570b113e3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5570b10ec150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5570b10e8fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5570b0e3f5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5570b0e367e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5570af8b4cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5570b0e39588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5570af6d914f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5570af6e4925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5570af6d1650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f2145ec3ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f2145f55850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 129ms
