function f(a1) {
    'use strict';
    a1(arguments);
    return arguments.length;
}
function g(a7) {
    return f(a7, 1, 2, 3);
}
function h(a13) {
    '[object Arguments]';
    "" + a13;
}
g(h);
g(h);
g(h);
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
// #FailureMessage Object: 0x7f65d57fb700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55d6b88b2a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55d6b88b12a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55d6b88a5546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55d6b88a4d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55d6ba3be13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55d6ba7897a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55d6ba31b3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55d6ba2c9150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55d6ba2c5fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55d6ba01c5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55d6ba0137e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55d6b8a91cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55d6ba016588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55d6b88b614f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55d6b88c1925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55d6b88ae650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f65ddbb0ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f65ddc42850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 133ms
