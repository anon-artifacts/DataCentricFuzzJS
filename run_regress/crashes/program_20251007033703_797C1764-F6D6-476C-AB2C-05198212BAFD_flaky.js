function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
[,794011.7445091044,F0];
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
// #FailureMessage Object: 0x7f2701564700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5581b0a2fa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5581b0a2e2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5581b0a22546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5581b0a21d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5581b253b13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5581b29067a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5581b24983eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5581b2446150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5581b2442fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5581b21995d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5581b21907e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5581b0c0ecb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5581b2193588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5581b0a3314f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5581b0a3e925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5581b0a2b650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f2710126ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f27101b8850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 100ms
