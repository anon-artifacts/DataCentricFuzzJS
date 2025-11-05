function Module(a1, a2, a3, a4) {
    'use asm';
    const t2 = a1.Int8Array;
    const v6 = new t2(a3, a4);
    var MEM8 = v6;
    const t5 = a1.Int16Array;
    const v9 = new t5(a3, a4);
    var MEM16 = v9;
    const t8 = a1.Int32Array;
    const v12 = new t8(a3, a4);
    var MEM32 = v12;
    const t11 = a1.Uint8Array;
    const v15 = new t11(a3, a4);
    var MEMU8 = v15;
    const t14 = a1.Uint16Array;
    const v18 = new t14(a3, a4);
    var MEMU16 = v18;
    const t17 = a1.Uint32Array;
    const v21 = new t17(a3, a4);
    var MEMU32 = v21;
    var load = a1.Atomics.load;
    var fround = a1.Math.fround;
    function loadi8(a30) {
        a30 = a30 | 0;
        let v33;
        try { v33 = load(MEM8, a30); } catch (e) {}
        return v33 | 0;
    }
    function loadi16(a37) {
        a37 = a37 | 0;
        let v40;
        try { v40 = load(MEM16, a37); } catch (e) {}
        return v40 | 0;
    }
    function loadi32(a44) {
        a44 = a44 | 0;
        let v47;
        try { v47 = load(MEM32, a44); } catch (e) {}
        return v47 | 0;
    }
    function loadu8(a51) {
        a51 = a51 | 0;
        let v54;
        try { v54 = load(MEMU8, a51); } catch (e) {}
        return v54 >>> 0;
    }
    function loadu16(a58) {
        a58 = a58 | 0;
        let v61;
        try { v61 = load(MEMU16, a58); } catch (e) {}
        return v61 >>> 0;
    }
    function loadu32(a65) {
        a65 = a65 | 0;
        let v68;
        try { v68 = load(MEMU32, a65); } catch (e) {}
        return v68 >>> 0;
    }
    const v71 = {
        loadi8: loadi8,
        loadi16: loadi16,
        loadi32: loadi32,
        loadu8: loadu8,
        loadu16: loadu16,
        loadu32: loadu32,
    };
    return v71;
}
function clearArray() {
    const v75 = new Uint8Array(sab);
    var ui8 = v75;
    for (let i78 = 0; i78 < sab.byteLength; ++i78) {
        ui8[i78] = 0;
    }
}
function testElementType(a86, a87, a88) {
    clearArray();
    const v91 = new a86(sab, a88);
    var ta = v91;
    var name = Object.prototype.toString.call(ta);
    ta[0] = 10;
    a87(0);
    a87(1);
    function f105() {
        a87(-1);
    }
    f105();
    function f110() {
        a87(ta.length);
    }
    f110();
}
function testElement(a115, a116) {
    testElementType(Int8Array, a115.loadi8, a116);
    testElementType(Int16Array, a115.loadi16, a116);
    testElementType(Int32Array, a115.loadi32, a116);
    testElementType(Uint8Array, a115.loadu8, a116);
    testElementType(Uint16Array, a115.loadu16, a116);
    testElementType(Uint32Array, a115.loadu32, a116);
}
var offset = 0;
const v139 = new Array(16);
var sab = v139;
var m1 = Module(this, {}, sab, offset);
testElement(m1, offset);
offset = 32;
const v148 = new Array(64);
sab = v148;
var m2 = Module(this, {}, sab, offset);
testElement(m2, offset);
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
// #FailureMessage Object: 0x7f465e93f700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55fca442ca82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55fca442b2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55fca441f546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55fca441ed95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55fca5f3813e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55fca63037a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55fca5e953eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55fca5e43150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55fca5e3ffd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55fca5b965d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55fca5b8d7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55fca460bcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55fca5b90588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55fca443014f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55fca443b925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55fca4428650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f46684f7ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f4668589850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 165ms
