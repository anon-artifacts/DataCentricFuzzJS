function f0() {
    return [];
}
var Ctor = f0;
var a = ["one","two","three"];
a.constructor = {};
const t6 = a.constructor;
t6[Symbol.species] = Ctor;
function f12() {
    return true;
}
a.filter(f12);
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
// #FailureMessage Object: 0x7fae0a42a700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x555c9c393a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x555c9c3922a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x555c9c386546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x555c9c385d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x555c9de9f13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x555c9e26a7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x555c9ddfc3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x555c9ddaa150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x555c9dda6fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x555c9dafd5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x555c9daf47e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x555c9c572cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x555c9daf7588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x555c9c39714f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x555c9c3a2925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x555c9c38f650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fae12fe0ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fae13072850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 157ms
