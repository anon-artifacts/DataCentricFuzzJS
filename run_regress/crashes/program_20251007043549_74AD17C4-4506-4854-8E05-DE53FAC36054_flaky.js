function f() {
    var x = 0;
    for (let i4 = 1; i4 < 1000000; i4++) {
        if (i4 > 0) {
            x += Math.clz32(i4);
        }
    }
    return x;
}
function g() {
    var x = 0;
    for (let i18 = 1; i18 < 1000000; i18++) {
        x += Math.clz32(i18);
    }
    return x;
}
function h() {
    var x = 0;
    for (let i30 = 0; i30 < 1000000; i30++) {
        x += Math.clz32(i30);
    }
    return x;
}
f();
g();
h();
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
// #FailureMessage Object: 0x7f5a824f4700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55c0cbed6a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55c0cbed52a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55c0cbec9546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55c0cbec8d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55c0cd9e213e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55c0cddad7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55c0cd93f3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55c0cd8ed150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55c0cd8e9fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55c0cd6405d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55c0cd6377e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55c0cc0b5cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55c0cd63a588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55c0cbeda14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55c0cbee5925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55c0cbed2650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f5a8a8a9ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f5a8a93b850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 203ms
