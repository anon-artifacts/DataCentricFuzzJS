function A() {
    this.x = 0;
    for (let i4 = 0; i4 < max;) {
    }
}
function foo() {
    const v10 = new A();
    return v10;
}
try {
    foo();
} catch(e12) {
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
// #FailureMessage Object: 0x7f3fc5bc2700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x563db7125a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x563db71242a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x563db7118546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x563db7117d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x563db8c3113e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x563db8ffc7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x563db8b8e3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x563db8b3c150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x563db8b38fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x563db888f5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x563db88867e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x563db7304cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x563db8889588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x563db712914f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x563db7134925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x563db7121650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f3fd077cac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f3fd080e850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 106ms
