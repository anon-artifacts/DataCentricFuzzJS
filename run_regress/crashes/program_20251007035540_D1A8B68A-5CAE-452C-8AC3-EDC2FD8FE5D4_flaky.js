var typedArrayConstructors = [Uint8Array,Int8Array,Uint16Array,Int16Array,Uint32Array,Int32Array,Uint8ClampedArray,Float32Array,Float64Array];
var lengthCalled = false;
function lengthValue() {
    lengthCalled = true;
    return 5;
}
function f16() {
    return 4.6;
}
function f18() {
    return -5;
}
function f21() {
    return NaN;
}
function f23() {
    return "5";
}
function f25() {
    return "abc";
}
function f27() {
    return true;
}
function f29() {
    return null;
}
function f31() {
    return undefined;
}
var goodNonIntegerLengths = [f16,f18,f21,f23,f25,f27,f29,f31];
function badNonIntegerLength() {
    return Symbol("5");
}
for (const v39 of typedArrayConstructors) {
    lengthCalled = false;
    const v42 = new v39(10);
    var a = v42;
    const v44 = { valueOf: lengthValue };
    a.set({ length: v44 });
    for (const v47 of goodNonIntegerLengths) {
        const v48 = { valueOf: v47 };
        a.set({ length: v48 });
    }
    function f51() {
        const v52 = { valueOf: badNonIntegerLength };
        const v53 = { length: v52 };
        try { a.set(v53); } catch (e) {}
    }
    f51();
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
// #FailureMessage Object: 0x7f928b155700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x558993cb3a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x558993cb22a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x558993ca6546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x558993ca5d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5589957bf13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x558995b8a7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55899571c3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5589956ca150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5589956c6fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55899541d5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5589954147e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x558993e92cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x558995417588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x558993cb714f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x558993cc2925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x558993caf650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f9296510ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f92965a2850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 139ms
