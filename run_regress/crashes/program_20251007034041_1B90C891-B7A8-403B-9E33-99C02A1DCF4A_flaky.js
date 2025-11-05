function testAddInconvertibleObjectAny() {
    var count = 0;
    function toString() {
    }
    try {
        for (let i5 = 0; i5 < 100; i5++) {
            var q = count[count] && this ? testAddInconvertibleObjectAny : ++toString;
        }
    } catch(e17) {
        var dbg = count(toString);
    }
}
testAddInconvertibleObjectAny();
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
// #FailureMessage Object: 0x7f17cc5c6700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55d500943a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55d5009422a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55d500936546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55d500935d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55d50244f13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55d50281a7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55d5023ac3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55d50235a150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55d502356fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55d5020ad5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55d5020a47e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55d500b22cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55d5020a7588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55d50094714f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55d500952925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55d50093f650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f17d497bac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f17d4a0d850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 134ms
