function TestInlinedConstructor(a1, a2) {
    var result;
    var counter = { value: 0 };
    var noDeopt = { deopt: 0 };
    var forceDeopt = {};
    result = a2(a1, 11, noDeopt, counter);
    counter.value;
    result = a2(a1, 23, noDeopt, counter);
    counter.value;
    result = a2(a1, 42, noDeopt, counter);
    counter.value;
    result = a2(a1, 127, forceDeopt, counter);
    counter.value;
}
function value_context(a34, a35, a36, a37) {
    const v38 = new a34(a35, a36, a37);
    var obj = v38;
    return obj.x;
}
function test_context(a42, a43, a44, a45) {
    const v46 = new a42(a43, a44, a45);
    if (!v46) {
    }
    return a43;
}
function effect_context(a50, a51, a52, a53) {
    new a50(a51, a52, a53);
    return a51;
}
function TestInAllContexts(a56) {
    TestInlinedConstructor(a56, value_context);
    TestInlinedConstructor(a56, test_context);
    TestInlinedConstructor(a56, effect_context);
}
function c1(a61, a62, a63) {
    a62.deopt;
    this.x = a61;
    let v66 = a63.value;
    v66++;
}
TestInAllContexts(c1);
function c2(a70, a71, a72) {
    var obj = {};
    a71.deopt;
    obj.x = a70;
    let v76 = a72.value;
    v76++;
    return obj;
}
TestInAllContexts(c2);
function c3(a80, a81, a82) {
    a81.deopt;
    this.x = a80;
    let v85 = a82.value;
    v85++;
    return "not an object";
}
TestInAllContexts(c3);
function c_too_many(a90, a91) {
    this.x = a90 + a91;
}
function f_too_many(a95, a96, a97) {
    const v98 = new c_too_many(a95, a96, a97);
    var obj = v98;
    return obj.x;
}
f_too_many(11, 12, 1);
f_too_many(23, 19, 1);
f_too_many(1, 42, 1);
f_too_many("foo", "bar", "baz");
function c_too_few(a122, a123) {
    this.x = a122 + 1;
}
function f_too_few(a129) {
    const v130 = new c_too_few(a129);
    var obj = v130;
    return obj.x;
}
f_too_few(11);
f_too_few(23);
f_too_few(1);
f_too_few("foo");
function c_unsupported_syntax(a146, a147, a148) {
    try {
        a147.deopt;
        this.x = a146;
        let v151 = a148.value;
        v151++;
    } catch(e153) {
        const v155 = new Error();
        throw v155;
    }
}
TestInAllContexts(c_unsupported_syntax);
function c_strict(a158, a159, a160) {
    'use strict';
    a159.deopt;
    this.x = a158;
    let v163 = a160.value;
    v163++;
}
TestInAllContexts(c_strict);
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
// #FailureMessage Object: 0x7f53f9cca700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5619ad0c5a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5619ad0c42a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5619ad0b8546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5619ad0b7d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5619aebd113e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5619aef9c7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5619aeb2e3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5619aeadc150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5619aead8fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5619ae82f5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5619ae8267e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5619ad2a4cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5619ae829588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5619ad0c914f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5619ad0d4925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5619ad0c1650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f5402880ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f5402912850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 146ms
