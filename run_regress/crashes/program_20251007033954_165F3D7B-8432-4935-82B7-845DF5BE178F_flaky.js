function test1(a1) {
    var i = 0;
    if (a1) {
        if (a1) {
            i += 1;
        } else {
            i += 10;
        }
        i += 100;
    } else {
        if (a1) {
            i += 1000;
        } else {
            i += 10000;
        }
        i += 100000;
    }
    i += 1000000;
    return i;
}
function test() {
    test1(true);
    test1(false);
}
for (let i19 = 0; i19 < 100; i19++) {
    test();
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
// #FailureMessage Object: 0x7fd2136bc700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x559e148c1a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x559e148c02a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x559e148b4546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x559e148b3d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x559e163cd13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x559e167987a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x559e1632a3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x559e162d8150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x559e162d4fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x559e1602b5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x559e160227e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x559e14aa0cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x559e16025588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x559e148c514f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x559e148d0925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x559e148bd650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fd21ea77ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fd21eb09850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 121ms
