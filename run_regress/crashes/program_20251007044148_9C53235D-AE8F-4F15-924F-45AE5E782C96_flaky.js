test();
function test() {
    const v5 = { e: "foo" };
    v5[Symbol.unscopables] = 448595;
    with (v5) {
        var e = "wibble";
    }
    return test;
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
// #FailureMessage Object: 0x7f18e1bb7700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55bb7e0c5a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55bb7e0c42a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55bb7e0b8546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55bb7e0b7d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55bb7fbd113e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55bb7ff9c7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55bb7fb2e3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55bb7fadc150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55bb7fad8fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55bb7f82f5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55bb7f8267e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55bb7e2a4cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55bb7f829588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55bb7e0c914f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55bb7e0d4925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55bb7e0c1650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f18eff78ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f18f000a850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 131ms
