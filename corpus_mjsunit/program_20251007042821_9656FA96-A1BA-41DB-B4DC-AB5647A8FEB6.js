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
