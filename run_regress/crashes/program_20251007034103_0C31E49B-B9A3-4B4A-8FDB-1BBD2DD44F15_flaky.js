function Cons1() {
}
const t2 = Cons1?.prototype;
t2.f = 42;
function Cons2() {
}
function f5() {
    counter++;
    return 84;
}
const v9 = Cons2?.prototype;
try { v9.__defineGetter__("f", f5); } catch (e) {}
function foo(a12) {
    return a12?.f;
}
try { noInline(foo); } catch (e) {}
var counter = 0;
function test(a19, a20, a21) {
    let v22;
    try { v22 = foo(a19); } catch (e) {}
    var result = v22;
    if (result != a20) {
        const v27 = "Bad result: " + result;
        let v28;
        try { v28 = new Error(v27); } catch (e) {}
        throw v28;
    }
    if (counter != a21) {
        const v32 = "Bad counter value: " + counter;
        let v33;
        try { v33 = new Error(v32); } catch (e) {}
        throw v33;
    }
}
for (let i35 = 0; i35 < 100000; ++i35) {
    let v41;
    try { v41 = new Cons1(); } catch (e) {}
    try { test(v41, 42, counter); } catch (e) {}
    let v44;
    try { v44 = new Cons2(); } catch (e) {}
    const v47 = counter + 1;
    try { test(v44, 84, v47); } catch (e) {}
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
// #FailureMessage Object: 0x7ff27c36e700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x563ddaf83a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x563ddaf822a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x563ddaf76546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x563ddaf75d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x563ddca8f13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x563ddce5a7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x563ddc9ec3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x563ddc99a150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x563ddc996fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x563ddc6ed5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x563ddc6e47e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x563ddb162cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x563ddc6e7588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x563ddaf8714f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x563ddaf92925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x563ddaf7f650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7ff28872bac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7ff2887bd850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 172ms
