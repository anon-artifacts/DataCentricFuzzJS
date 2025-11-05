new Set();
new Float32Array(1024);
new BigUint64Array(1);
new Int32Array(512);
var a = [1];
function f(a15) {
    var round = Math.round;
    for (let i20 = 0; i20 < 20; i20++) {
        round(a[0]);
        if (a15 > 500) {
            a[0] = "a";
        }
    }
}
for (let i32 = 0; i32 < 550; i32++) {
    f(i32);
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
// #FailureMessage Object: 0x7fdeefb4e700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x560a5f9d6a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x560a5f9d52a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x560a5f9c9546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x560a5f9c8d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x560a614e213e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x560a618ad7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x560a6143f3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x560a613ed150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x560a613e9fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x560a611405d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x560a611377e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x560a5fbb5cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x560a6113a588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x560a5f9da14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x560a5f9e5925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x560a5f9d2650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fdef8704ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fdef8796850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 135ms
