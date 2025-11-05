function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
var symbol = Symbol("Cocoa");
var object = { [symbol]: 3, 0: 0, hello: 2, 1: 1 };
var count = 0;
const v20 = {};
const v21 = () => {
    shouldBe(count++, 0);
};
const v25 = { set: v21 };
const v26 = () => {
    shouldBe(count++, 1);
};
const v30 = { set: v26 };
const v31 = () => {
    shouldBe(count++, 2);
};
const v35 = { set: v31 };
const v36 = () => {
    shouldBe(count++, 3);
};
const v40 = { set: v36 };
var tester = Object.defineProperties(v20, { 0: v25, 1: v30, hello: v35, [symbol]: v40 });
Object.assign(tester, object);
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
// #FailureMessage Object: 0x7f5f6e25e700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x564bab0e1a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x564bab0e02a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x564bab0d4546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x564bab0d3d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x564bacbed13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x564bacfb87a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x564bacb4a3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x564bacaf8150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x564bacaf4fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x564bac84b5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x564bac8427e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x564bab2c0cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x564bac845588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x564bab0e514f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x564bab0f0925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x564bab0dd650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f5f7c61fac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f5f7c6b1850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 144ms
