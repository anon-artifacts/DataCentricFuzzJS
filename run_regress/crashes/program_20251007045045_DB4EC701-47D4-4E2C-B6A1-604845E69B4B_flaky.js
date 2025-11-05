function f0() {
}
var BUGNUMBER = 367589;
var summary = "Do not assert !SPROP_HAS_STUB_SETTER(sprop) || (sprop->attrs & JSPROP_GETTER)";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    gDelayTestDriverEnd = true;
}
function crash() {
    setTimeout(checkCrash, 0);
}
function checkCrash() {
    gDelayTestDriverEnd = false;
    f0(expect, actual, summary);
}
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
// #FailureMessage Object: 0x7fd52f62c700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55dc34b6ca82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55dc34b6b2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55dc34b5f546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55dc34b5ed95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55dc3667813e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55dc36a437a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55dc365d53eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55dc36583150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55dc3657ffd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55dc362d65d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55dc362cd7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55dc34d4bcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55dc362d0588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55dc34b7014f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55dc34b7b925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55dc34b68650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fd5391e4ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fd539276850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 106ms
