const v4 = new Int32Array(10 + 1);
const v12 = new Uint8Array(v4.buffer, ((10 + 1) * 4) - 10);
v4.set(v12);
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
// #FailureMessage Object: 0x7f72b837f700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x560457ec4a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x560457ec32a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x560457eb7546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x560457eb6d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5604599d013e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x560459d9b7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x56045992d3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5604598db150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5604598d7fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x56045962e5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5604596257e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5604580a3cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x560459628588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x560457ec814f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x560457ed3925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x560457ec0650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f72c6740ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f72c67d2850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 130ms
