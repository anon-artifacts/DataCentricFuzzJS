function assert(a1) {
}
let p = Object.getOwnPropertyDescriptor(BigInt, "prototype");
p.writable === false;
p.enumerable === false;
p.configurable === false;
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
// #FailureMessage Object: 0x7f446c22c700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55fe8c7ffa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55fe8c7fe2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55fe8c7f2546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55fe8c7f1d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55fe8e30b13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55fe8e6d67a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55fe8e2683eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55fe8e216150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55fe8e212fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55fe8df695d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55fe8df607e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55fe8c9decb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55fe8df63588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55fe8c80314f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55fe8c80e925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55fe8c7fb650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f44785e9ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f447867b850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 151ms
