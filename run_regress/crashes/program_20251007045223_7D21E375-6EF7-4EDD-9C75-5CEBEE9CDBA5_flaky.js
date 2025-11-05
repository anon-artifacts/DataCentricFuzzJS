var large_int = 1073741824;
function foo(a3, a4) {
    a3 += 0;
    if (3 != a3) {
        a3 += 0;
    }
}
foo(1, 1);
foo(3, 3);
foo(large_int, large_int);
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
// #FailureMessage Object: 0x7fb16f28d700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x561453107a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5614531062a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5614530fa546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5614530f9d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x561454c1313e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x561454fde7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x561454b703eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x561454b1e150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x561454b1afd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5614548715d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5614548687e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5614532e6cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x56145486b588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x56145310b14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x561453116925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x561453103650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fb17d64eac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fb17d6e0850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 117ms
