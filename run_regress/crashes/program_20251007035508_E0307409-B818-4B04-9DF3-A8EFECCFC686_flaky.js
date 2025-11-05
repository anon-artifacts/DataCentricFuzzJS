const v1 = new Set();
v1.has(1.234);
const v6 = [,];
try { new WeakSet(v6); } catch (e) {}
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
// #FailureMessage Object: 0x7f274eefc700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x559e04921a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x559e049202a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x559e04914546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x559e04913d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x559e0642d13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x559e067f87a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x559e0638a3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x559e06338150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x559e06334fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x559e0608b5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x559e060827e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x559e04b00cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x559e06085588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x559e0492514f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x559e04930925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x559e0491d650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f275e2bfac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f275e351850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 162ms
