function C() {
    var k = 3;
    function f3() {
        return k;
    }
    this.x = f3;
    for (let i6 = 0; i6 < 9; i6++) {
    }
}
new C();
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
// #FailureMessage Object: 0x7f10d529a700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55c0ca7b1a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55c0ca7b02a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55c0ca7a4546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55c0ca7a3d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55c0cc2bd13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55c0cc6887a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55c0cc21a3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55c0cc1c8150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55c0cc1c4fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55c0cbf1b5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55c0cbf127e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55c0ca990cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55c0cbf15588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55c0ca7b514f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55c0ca7c0925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55c0ca7ad650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f10dd64fac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f10dd6e1850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 171ms
