function f(a1) {
    Math.log(Math.min(0.1, Math.abs(a1)));
}
f(0.1);
f(0.1);
f(0.1);
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
// #FailureMessage Object: 0x7f86dbf11700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55d09a7e4a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55d09a7e32a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55d09a7d7546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55d09a7d6d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55d09c2f013e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55d09c6bb7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55d09c24d3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55d09c1fb150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55d09c1f7fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55d09bf4e5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55d09bf457e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55d09a9c3cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55d09bf48588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55d09a7e814f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55d09a7f3925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55d09a7e0650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f86e82ceac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f86e8360850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 114ms
