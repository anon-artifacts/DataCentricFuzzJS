const v2 = new Uint8ClampedArray(16);
var arr = v2;
for (let i5 = 0; i5 < 16; i5++) {
    arr[i5] = "Infinity";
}
arr[14];
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
// #FailureMessage Object: 0x7f163ff40700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5597a728ca82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5597a728b2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5597a727f546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5597a727ed95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5597a8d9813e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5597a91637a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5597a8cf53eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5597a8ca3150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5597a8c9ffd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5597a89f65d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5597a89ed7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5597a746bcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5597a89f0588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5597a729014f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5597a729b925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5597a7288650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f164e301ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f164e393850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 106ms
