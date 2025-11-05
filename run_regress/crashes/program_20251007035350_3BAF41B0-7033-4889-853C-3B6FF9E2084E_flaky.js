var o = ["囧","æ"];
JSON.stringify(o);
JSON.stringify(o, null, 0);
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
// #FailureMessage Object: 0x7fe578b74700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5603c71eea82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5603c71ed2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5603c71e1546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5603c71e0d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5603c8cfa13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5603c90c57a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5603c8c573eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5603c8c05150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5603c8c01fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5603c89585d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5603c894f7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5603c73cdcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5603c8952588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5603c71f214f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5603c71fd925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5603c71ea650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fe582f2dac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fe582fbf850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 153ms
