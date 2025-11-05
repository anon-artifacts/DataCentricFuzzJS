function f0() {
    function eq(a2, a3) {
        return a2 == a3;
    }
    const v5 = () => {
        return "o";
    };
    const v8 = Symbol.toPrimitive;
    var o = { [v8]: v5 };
    eq(o, o);
    eq(o, o);
    eq(o, o);
    eq("o", o);
    eq(o, "o");
    eq(o, o);
    eq("o", o);
    eq(o, "o");
    eq();
}
f0();
function f25() {
    function ne(a27, a28) {
        return a27 != a28;
    }
    const v30 = () => {
        return "o";
    };
    const v33 = Symbol.toPrimitive;
    var o = { [v33]: v30 };
    ne(o, o);
    ne(o, o);
    ne(o, o);
    ne("o", o);
    ne(o, "o");
    ne(o, o);
    ne("o", o);
    ne(o, "o");
    ne();
}
f25();
function f50() {
    function eq(a52, a53) {
        return a52 == a53;
    }
    var a = {};
    var b = { b: b };
    function f60() {
    }
    var u = f60;
    eq(a, a);
    eq(b, b);
    eq(a, b);
    eq(b, a);
    eq(a, a);
    eq(b, b);
    eq(a, b);
    eq(b, a);
    eq(a, a);
    eq(b, b);
    eq(a, b);
    eq(b, a);
    eq(null, u);
    eq(undefined, u);
    eq(u, null);
    eq(u, undefined);
    eq(a, a);
    eq(b, b);
    eq(a, b);
    eq(b, a);
    eq(null, u);
    eq(undefined, u);
    eq(u, null);
    eq(u, undefined);
    eq();
}
f50();
function f96() {
    function ne(a98, a99) {
        return a98 != a99;
    }
    var a = {};
    var b = { b: b };
    function f106() {
    }
    var u = f106;
    ne(a, a);
    ne(b, b);
    ne(a, b);
    ne(b, a);
    ne(a, a);
    ne(b, b);
    ne(a, b);
    ne(b, a);
    ne(a, a);
    ne(b, b);
    ne(a, b);
    ne(b, a);
    ne(null, u);
    ne(undefined, u);
    ne(u, null);
    ne(u, undefined);
    ne(a, a);
    ne(b, b);
    ne(a, b);
    ne(b, a);
    ne(null, u);
    ne(undefined, u);
    ne(u, null);
    ne(u, undefined);
    ne();
}
f96();
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
// #FailureMessage Object: 0x7fbb0463e700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x558e2c1aba82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x558e2c1aa2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x558e2c19e546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x558e2c19dd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x558e2dcb713e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x558e2e0827a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x558e2dc143eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x558e2dbc2150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x558e2dbbefd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x558e2d9155d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x558e2d90c7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x558e2c38acb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x558e2d90f588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x558e2c1af14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x558e2c1ba925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x558e2c1a7650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fbb101faac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fbb1028c850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 134ms
