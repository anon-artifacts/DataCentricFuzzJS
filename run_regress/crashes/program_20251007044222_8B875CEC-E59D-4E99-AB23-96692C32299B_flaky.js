class C1 {
    [9007199254740992n];
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
// #FailureMessage Object: 0x7f65258b4700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x565204c84a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x565204c832a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x565204c77546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x565204c76d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x56520679013e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x565206b5b7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5652066ed3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x56520669b150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x565206697fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5652063ee5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5652063e57e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x565204e63cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5652063e8588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x565204c8814f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x565204c93925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x565204c80650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f6531470ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f6531502850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 133ms
