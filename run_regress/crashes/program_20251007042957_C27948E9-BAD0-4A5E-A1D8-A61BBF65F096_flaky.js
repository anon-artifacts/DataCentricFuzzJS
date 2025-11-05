function f0() {
}
var BUGNUMBER = 244619;
var summary = "Don't Crash";
var actual = "Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
function f1() {
    const v13 = new Object();
    var o = v13;
    eval.call(o, "var a = 'vodka'");
}
try {
    f1();
} catch(e19) {
}
f0(expect, actual = "No Crash", summary);
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
// #FailureMessage Object: 0x7f000df62700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55f049c2fa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55f049c2e2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55f049c22546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55f049c21d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55f04b73b13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55f04bb067a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55f04b6983eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55f04b646150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55f04b642fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55f04b3995d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55f04b3907e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55f049e0ecb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55f04b393588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55f049c3314f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55f049c3e925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55f049c2b650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f0016317ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f00163a9850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 122ms
