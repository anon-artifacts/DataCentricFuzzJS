var global = /./g;
function f2() {
}
global.lastIndex = { valueOf: f2 };
function f5(a6) {
    return "X";
}
("x").replace(global, f5);
global.lastIndex;
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
// #FailureMessage Object: 0x7fe8a8cb4700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55cb63aaba82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55cb63aaa2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55cb63a9e546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55cb63a9dd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55cb655b713e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55cb659827a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55cb655143eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55cb654c2150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55cb654befd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55cb652155d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55cb6520c7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55cb63c8acb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55cb6520f588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55cb63aaf14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55cb63aba925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55cb63aa7650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fe8b286cac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fe8b28fe850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 211ms
