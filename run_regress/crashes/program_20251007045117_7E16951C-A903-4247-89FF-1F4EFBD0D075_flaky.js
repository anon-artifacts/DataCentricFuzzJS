console.log("Tests that we can inline a constructor that uses arguments without failing DFG validation.");
function Foo() {
    this.x = arguments[0];
}
function bar() {
    const v9 = new Foo(42);
    return v9;
}
for (let i11 = 0; i11 < 200; ++i11) {
    bar().x;
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
// #FailureMessage Object: 0x7fc5b41da700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55e7393a1a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55e7393a02a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55e739394546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55e739393d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55e73aead13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55e73b2787a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55e73ae0a3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55e73adb8150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55e73adb4fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55e73ab0b5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55e73ab027e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55e739580cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55e73ab05588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55e7393a514f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55e7393b0925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55e73939d650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fc5be593ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fc5be625850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 153ms
