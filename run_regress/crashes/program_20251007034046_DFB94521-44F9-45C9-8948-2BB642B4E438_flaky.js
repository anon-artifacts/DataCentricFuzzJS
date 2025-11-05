const v2 = new Float32Array(1);
var f32 = v2;
for (let i5 = 100; i5; --i5) {
    f32.hasOwnProperty(4);
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
// #FailureMessage Object: 0x7fe2eda2c700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55673363ba82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55673363a2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55673362e546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55673362dd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55673514713e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5567355127a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5567350a43eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x556735052150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55673504efd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x556734da55d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x556734d9c7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55673381acb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x556734d9f588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55673363f14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55673364a925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x556733637650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fe2fbdedac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fe2fbe7f850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 158ms
