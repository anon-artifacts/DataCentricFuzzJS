function foo(a1) {
    a1++;
    a1 = Math.max(0, a1);
    a1++;
    return a1;
}
foo(0);
foo(0);
foo(2147483646);
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
// #FailureMessage Object: 0x7fb0d5659700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x563d6e05ea82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x563d6e05d2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x563d6e051546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x563d6e050d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x563d6fb6a13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x563d6ff357a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x563d6fac73eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x563d6fa75150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x563d6fa71fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x563d6f7c85d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x563d6f7bf7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x563d6e23dcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x563d6f7c2588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x563d6e06214f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x563d6e06d925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x563d6e05a650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fb0e423bac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fb0e42cd850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 120ms
