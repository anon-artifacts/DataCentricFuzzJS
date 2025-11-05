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
// #FailureMessage Object: 0x7fc70719e700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x558fcfefea82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x558fcfefd2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x558fcfef1546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x558fcfef0d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x558fd1a0a13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x558fd1dd57a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x558fd19673eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x558fd1915150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x558fd1911fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x558fd16685d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x558fd165f7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x558fd00ddcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x558fd1662588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x558fcff0214f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x558fcff0d925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x558fcfefa650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fc716561ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fc7165f3850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 189ms
