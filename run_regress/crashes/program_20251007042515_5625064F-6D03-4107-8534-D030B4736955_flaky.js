const v1 = Object.getOwnPropertyDescriptors;
function f2() {
}
Promise.resolve(f2).then(v1);
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
// #FailureMessage Object: 0x7fde1d621700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55b7e8070a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55b7e806f2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55b7e8063546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55b7e8062d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55b7e9b7c13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55b7e9f477a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55b7e9ad93eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55b7e9a87150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55b7e9a83fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55b7e97da5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55b7e97d17e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55b7e824fcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55b7e97d4588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55b7e807414f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55b7e807f925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55b7e806c650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fde2a9e0ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fde2aa72850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 125ms
