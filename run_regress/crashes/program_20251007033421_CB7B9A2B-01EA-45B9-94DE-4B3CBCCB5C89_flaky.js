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
// #FailureMessage Object: 0x7fef7d456700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x560eb9bdaa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x560eb9bd92a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x560eb9bcd546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x560eb9bccd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x560ebb6e613e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x560ebbab17a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x560ebb6433eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x560ebb5f1150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x560ebb5edfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x560ebb3445d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x560ebb33b7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x560eb9db9cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x560ebb33e588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x560eb9bde14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x560eb9be9925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x560eb9bd6650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fef88010ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fef880a2850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 117ms
