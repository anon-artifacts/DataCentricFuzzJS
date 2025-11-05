const v2 = new Uint8Array(117);
v2.toHex();
function f4() {
    Object.getOwnPropertyDescriptor(Uint8Array, Uint8Array);
    return 117;
}
CatchAndWriteExceptions(f4);
function CatchAndWriteExceptions(a10) {
    return a10(a10, v2, a10);
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
// #FailureMessage Object: 0x7f313570b700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x561e0c9bca82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x561e0c9bb2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x561e0c9af546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x561e0c9aed95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x561e0e4c813e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x561e0e8937a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x561e0e4253eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x561e0e3d3150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x561e0e3cffd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x561e0e1265d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x561e0e11d7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x561e0cb9bcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x561e0e120588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x561e0c9c014f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x561e0c9cb925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x561e0c9b8650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f313f2c3ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f313f355850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 182ms
