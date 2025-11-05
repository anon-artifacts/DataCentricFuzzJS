function f0() {
}
var BUGNUMBER = 317714;
var summary = "Regression test for regression from bug 316885";
var actual = "No Crash";
var expect = "No Crash";
var d5 = "-1";
var r3 = d5.split(":");
let v14 = r3[0];
v14++;
f0(BUGNUMBER);
f0(summary);
f0(expect, actual, summary);
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
// #FailureMessage Object: 0x7f1b94ff7700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55b773caea82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55b773cad2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55b773ca1546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55b773ca0d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55b7757ba13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55b775b857a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55b7757173eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55b7756c5150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55b7756c1fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55b7754185d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55b77540f7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55b773e8dcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55b775412588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55b773cb214f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55b773cbd925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55b773caa650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f1bae659ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f1bae6eb850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 145ms
