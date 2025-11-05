const v2 = {
    get hello() {
        return this;
    },
    a: 555,
};
for (let v3 = 0; v3 < 5; v3++) {
    v2.a = v3;
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
// #FailureMessage Object: 0x7faca47f6700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5582c42c3a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5582c42c22a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5582c42b6546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5582c42b5d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5582c5dcf13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5582c619a7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5582c5d2c3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5582c5cda150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5582c5cd6fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5582c5a2d5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5582c5a247e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5582c44a2cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5582c5a27588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5582c42c714f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5582c42d2925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5582c42bf650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7facb33e4ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7facb3476850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 121ms
