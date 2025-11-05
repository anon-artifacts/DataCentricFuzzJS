function f1() {
    return BigUint64Array;
}
BigUint64Array.toString = f1;
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
// #FailureMessage Object: 0x7f6d6b6ee700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5617ffc07a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5617ffc062a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5617ffbfa546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5617ffbf9d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x56180171313e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x561801ade7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5618016703eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x56180161e150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x56180161afd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5618013715d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5618013687e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5617ffde6cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x56180136b588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5617ffc0b14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5617ffc16925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5617ffc03650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f6d7a2b0ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f6d7a342850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 164ms
