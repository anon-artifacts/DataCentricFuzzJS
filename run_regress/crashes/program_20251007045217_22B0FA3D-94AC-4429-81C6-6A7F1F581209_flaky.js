var value = NaN;
for (i = 0; i < 256; i++) {
    (value === "A") || (value === "B");
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
// #FailureMessage Object: 0x7f8fa4823700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5634f6a51a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5634f6a502a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5634f6a44546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5634f6a43d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5634f855d13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5634f89287a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5634f84ba3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5634f8468150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5634f8464fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5634f81bb5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5634f81b27e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5634f6c30cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5634f81b5588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5634f6a5514f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5634f6a60925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5634f6a4d650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f8fb3be6ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f8fb3c78850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 112ms
