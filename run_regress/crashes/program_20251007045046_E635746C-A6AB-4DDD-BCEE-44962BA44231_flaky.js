function testSlowArrayPopNestedTrees() {
    var a = [];
    for (let i4 = 0; i4 < 9; i4++) {
        a[i4] = [0];
    }
    function f13() {
        return 3.14159;
    }
    a[8].__defineGetter__("0", f13);
    function child(a18, a19, a20, a21) {
        var last = 2.71828;
        for (let i25 = 0; i25 < 9; i25++) {
            if (((a19 == 8) && (a20 == 8)) && (a21 == 8)) {
                last = a18[i25].pop();
            }
        }
        return last;
    }
    function parent(a42, a43, a44) {
        var last;
        for (let i48 = 0; i48 < 9; i48++) {
            last = child(a42, a43, a44, i48);
        }
        return last;
    }
    function gramps(a56, a57) {
        var last;
        for (let i61 = 0; i61 < 9; i61++) {
            last = parent(a56, a57, i61);
        }
        return last;
    }
    var last;
    for (let i71 = 0; i71 < 9; i71++) {
        last = gramps(a, i71);
    }
    return last;
}
testSlowArrayPopNestedTrees();
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
// #FailureMessage Object: 0x7f3837a50700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x559dd959ea82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x559dd959d2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x559dd9591546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x559dd9590d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x559ddb0aa13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x559ddb4757a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x559ddb0073eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x559ddafb5150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x559ddafb1fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x559ddad085d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x559ddacff7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x559dd977dcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x559ddad02588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x559dd95a214f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x559dd95ad925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x559dd959a650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f3844e0fac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f3844ea1850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 131ms
