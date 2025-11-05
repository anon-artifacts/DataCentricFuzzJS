const v1 = new Map();
var m = v1;
m.set("a", 0);
m.size;
m.set("a", 0);
m.size;
m.set("a", undefined);
m.size;
m.set("b", 2);
m.size;
m.set("a", 1);
m.size;
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
// #FailureMessage Object: 0x7f1edf902700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x56226a81ba82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x56226a81a2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x56226a80e546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x56226a80dd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x56226c32713e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x56226c6f27a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x56226c2843eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x56226c232150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x56226c22efd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x56226bf855d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x56226bf7c7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x56226a9facb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x56226bf7f588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x56226a81f14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x56226a82a925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x56226a817650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f1ee94baac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f1ee954c850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 177ms
