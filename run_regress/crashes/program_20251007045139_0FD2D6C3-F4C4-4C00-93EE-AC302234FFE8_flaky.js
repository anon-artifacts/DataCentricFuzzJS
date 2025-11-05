const v0 = (a1) => {
    a1 + 1;
};
var f = v0;
f(0);
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
// #FailureMessage Object: 0x7f6589bf7700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x56141babda82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x56141babc2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x56141bab0546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x56141baafd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x56141d5c913e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x56141d9947a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x56141d5263eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x56141d4d4150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x56141d4d0fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x56141d2275d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x56141d21e7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x56141bc9ccb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x56141d221588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x56141bac114f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x56141bacc925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x56141bab9650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f6598fbaac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f659904c850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 165ms
