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
// #FailureMessage Object: 0x7f5864bb3700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x557394cc5a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x557394cc42a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x557394cb8546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x557394cb7d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5573967d113e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x557396b9c7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55739672e3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5573966dc150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5573966d8fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55739642f5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5573964267e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x557394ea4cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x557396429588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x557394cc914f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x557394cd4925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x557394cc1650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f5875779ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f587580b850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 151ms
