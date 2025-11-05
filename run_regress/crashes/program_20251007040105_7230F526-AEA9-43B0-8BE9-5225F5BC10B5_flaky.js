console.dir(console);
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
// #FailureMessage Object: 0x7f3cff6a6700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x56405ca73a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x56405ca722a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x56405ca66546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x56405ca65d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x56405e57f13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x56405e94a7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x56405e4dc3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x56405e48a150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x56405e486fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x56405e1dd5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x56405e1d47e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x56405cc52cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x56405e1d7588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x56405ca7714f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x56405ca82925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x56405ca6f650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f3d0aa61ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f3d0aaf3850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 117ms
