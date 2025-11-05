for (let i1 = 0; i1 < 1000000; i1++) {
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
// #FailureMessage Object: 0x7fbf98ed8700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x561f67c33a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x561f67c322a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x561f67c26546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x561f67c25d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x561f6973f13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x561f69b0a7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x561f6969c3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x561f6964a150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x561f69646fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x561f6939d5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x561f693947e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x561f67e12cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x561f69397588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x561f67c3714f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x561f67c42925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x561f67c2f650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fbfa829bac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fbfa832d850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 140ms
