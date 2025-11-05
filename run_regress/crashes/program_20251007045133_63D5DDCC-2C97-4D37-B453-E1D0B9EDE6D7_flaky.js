const t0 = Object.prototype;
t0[3] = 3;
x = Array();
function f() {
    for (i = 0; i < 9; i++) {
        if (Object[x++] != 0) {
        }
    }
}
f();
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
// #FailureMessage Object: 0x7f14c740a700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55622b673a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55622b6722a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55622b666546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55622b665d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55622d17f13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55622d54a7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55622d0dc3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55622d08a150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55622d086fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55622cddd5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55622cdd47e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55622b852cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55622cdd7588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55622b67714f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55622b682925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55622b66f650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f14d5fccac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f14d605e850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 229ms
