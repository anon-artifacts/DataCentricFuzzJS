function f0() {
}
function f1() {
    return f1;
}
f0.prototype = { foo: f1 };
const v3 = new f0();
for (let v4 = 0; v4 < 100; v4++) {
    v3.foo();
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
// #FailureMessage Object: 0x7f2285f8e700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55b02f9f9a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55b02f9f82a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55b02f9ec546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55b02f9ebd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55b03150513e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55b0318d07a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55b0314623eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55b031410150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55b03140cfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55b0311635d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55b03115a7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55b02fbd8cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55b03115d588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55b02f9fd14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55b02fa08925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55b02f9f5650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f2294b50ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f2294be2850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 174ms
