function testNewArrayCount2() {
    function count(a2) {
        var n = 0;
        for (const v5 in a2) {
            n++;
        }
        return n;
    }
    var x = 0;
    for (let i10 = 0; i10 < 10; ++i10) {
        const v20 = new Array(1, 2, 3);
        x = count(v20);
    }
    return x;
}
testNewArrayCount2();
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
// #FailureMessage Object: 0x7fe5608a8700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5634b2f51a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5634b2f502a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5634b2f44546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5634b2f43d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5634b4a5d13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5634b4e287a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5634b49ba3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5634b4968150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5634b4964fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5634b46bb5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5634b46b27e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5634b3130cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5634b46b5588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5634b2f5514f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5634b2f60925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5634b2f4d650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fe56945eac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fe5694f0850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 245ms
