new Date(Date.UTC(2017, 3, 1, 14, 29));
new Date(2017, 3, 2, 1, 29);
new Date(Date.UTC(2017, 3, 1, 14, 30));
new Date(2017, 3, 2, 1, 30);
new Date(Date.UTC(2017, 3, 1, 14, 45));
new Date(2017, 3, 2, 1, 45);
new Date(Date.UTC(2017, 3, 1, 14, 59));
new Date(2017, 3, 2, 1, 59);
new Date(Date.UTC(2017, 3, 1, 15, 30));
new Date(2017, 3, 2, 2);
new Date(Date.UTC(2017, 3, 1, 15, 31));
new Date(2017, 3, 2, 2, 1);
new Date(Date.UTC(2017, 8, 30, 15, 29));
new Date(2017, 9, 1, 1, 59);
new Date(Date.UTC(2017, 8, 30, 15, 30));
new Date(2017, 9, 1, 2);
new Date(Date.UTC(2017, 8, 30, 15, 45));
new Date(2017, 9, 1, 2, 15);
new Date(Date.UTC(2017, 8, 30, 15, 30));
new Date(2017, 9, 1, 2, 30);
new Date(Date.UTC(2017, 8, 30, 15, 45));
new Date(2017, 9, 1, 2, 45);
const v147 = new Date(2017, 9, 1, 2, 45);
v147.getTimezoneOffset();
const v154 = new Date(2017, 9, 1, 2, 15);
v154.getTimezoneOffset();
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
// #FailureMessage Object: 0x7fdaea7fa700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5640903b6a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5640903b52a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5640903a9546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5640903a8d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x564091ec213e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x56409228d7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x564091e1f3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x564091dcd150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x564091dc9fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x564091b205d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x564091b177e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x564090595cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x564091b1a588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5640903ba14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5640903c5925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5640903b2650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fdafac99ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fdafad2b850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 190ms
