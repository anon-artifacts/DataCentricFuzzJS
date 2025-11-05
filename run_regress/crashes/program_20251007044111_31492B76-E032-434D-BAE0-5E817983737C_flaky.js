// WasmModule Code:
// BeginWasmModule
//     v0 <- WasmDefineGlobal wasmi64(-65536)
// v1 <- EndWasmModule
// 
const v1 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
    0x00, 0x61, 0x73, 0x6D, 0x01, 0x00, 0x00, 0x00, 0x01, 0x01,
    0x00, 0x03, 0x01, 0x00, 0x04, 0x01, 0x00, 0x05, 0x01, 0x00,
    0x06, 0x08, 0x01, 0x7E, 0x01, 0x42, 0x80, 0x80, 0x7C, 0x0B,
    0x07, 0x07, 0x01, 0x03, 0x77, 0x67, 0x30, 0x03, 0x00, 0x09,
    0x01, 0x00, 0x0A, 0x01, 0x00,
])));
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
// #FailureMessage Object: 0x7f804619b700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55a4bf919a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55a4bf9182a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55a4bf90c546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55a4bf90bd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55a4c142513e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55a4c17f07a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55a4c13823eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55a4c1330150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55a4c132cfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55a4c10835d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55a4c107a7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55a4bfaf8cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55a4c107d588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55a4bf91d14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55a4bf928925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55a4bf915650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f804e550ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f804e5e2850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 132ms
