function f0() {
    function f1(a2) {
        ~(+a2);
    }
    f = f1;
    const v7 = new Number();
    x = [v7];
    for (let i11 = 0; i11 < 3; ++i11) {
        for (let i18 = 0; i18 < 3; ++i18) {
            f(x[i18]);
        }
    }
}
f0();
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
// #FailureMessage Object: 0x7fd9e93af700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5603038e1a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5603038e02a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5603038d4546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5603038d3d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5603053ed13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5603057b87a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x56030534a3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5603052f8150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5603052f4fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x56030504b5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5603050427e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x560303ac0cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x560305045588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5603038e514f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5603038f0925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5603038dd650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fd9f1f65ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fd9f1ff7850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 133ms
