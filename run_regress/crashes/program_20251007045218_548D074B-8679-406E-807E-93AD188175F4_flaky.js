console.log("Tests that we don't emit unnecessary speculation checks when performing an int32 to double conversion on a value that is proved to be a number, predicted to be an int32, but not proved to be an int32.");
function foo(a4, a5) {
    var x = a4.f;
    var y;
    function bar() {
        return y;
    }
    var z = x + a5;
    y = x;
    if (z > 1) {
        return (y + a5) + bar();
    } else {
        return 72;
    }
}
for (let i20 = 0; i20 < 200; ++i20) {
    foo({ f: 5 }, 42.5);
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
// #FailureMessage Object: 0x7efe90adc700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55c7c46d5a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55c7c46d42a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55c7c46c8546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55c7c46c7d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55c7c61e113e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55c7c65ac7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55c7c613e3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55c7c60ec150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55c7c60e8fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55c7c5e3f5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55c7c5e367e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55c7c48b4cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55c7c5e39588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55c7c46d914f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55c7c46e4925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55c7c46d1650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7efe9ce99ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7efe9cf2b850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 123ms
