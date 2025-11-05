function foo() {
    var array = [];
    for (let i4 = 0; i4 < 1000; ++i4) {
        array.push(i4 + 0.5);
    }
    var result = 0;
    for (let i16 = 0; i16 < 1000; ++i16) {
        for (let i23 = 0; i23 < array.length; ++i23) {
            result += array[i23];
        }
    }
    return result;
}
if (foo() != 500000000) {
    throw "ERROR";
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
// #FailureMessage Object: 0x7f9f3a022700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x562ac0363a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x562ac03622a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x562ac0356546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x562ac0355d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x562ac1e6f13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x562ac223a7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x562ac1dcc3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x562ac1d7a150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x562ac1d76fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x562ac1acd5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x562ac1ac47e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x562ac0542cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x562ac1ac7588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x562ac036714f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x562ac0372925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x562ac035f650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f9f463dfac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f9f46471850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 129ms
