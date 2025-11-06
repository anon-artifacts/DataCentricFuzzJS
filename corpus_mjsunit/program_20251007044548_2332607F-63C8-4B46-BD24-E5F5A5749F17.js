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
    var and = a1.Atomics.and;
    var fround = a1.Math.fround;
    function andi8(a30, a31) {
        a30 = a30 | 0;
        a31 = a31 | 0;
        let v36;
        try { v36 = and(MEM8, a30, a31); } catch (e) {}
        return v36 | 0;
    }
    function andi16(a40, a41) {
        a40 = a40 | 0;
        a41 = a41 | 0;
        let v46;
        try { v46 = and(MEM16, a40, a41); } catch (e) {}
        return v46 | 0;
    }
    function andi32(a50, a51) {
        a50 = a50 | 0;
        a51 = a51 | 0;
        let v56;
        try { v56 = and(MEM32, a50, a51); } catch (e) {}
        return v56 | 0;
    }
    function andu8(a60, a61) {
        a60 = a60 | 0;
        a61 = a61 >>> 0;
        let v66;
        try { v66 = and(MEMU8, a60, a61); } catch (e) {}
        return v66 >>> 0;
    }
    function andu16(a70, a71) {
        a70 = a70 | 0;
        a71 = a71 >>> 0;
        let v76;
        try { v76 = and(MEMU16, a70, a71); } catch (e) {}
        return v76 >>> 0;
    }
    function andu32(a80, a81) {
        a80 = a80 | 0;
        a81 = a81 >>> 0;
        let v86;
        try { v86 = and(MEMU32, a80, a81); } catch (e) {}
        return v86 >>> 0;
    }
    const v89 = {
        andi8: andi8,
        andi16: andi16,
        andi32: andi32,
        andu8: andu8,
        andu16: andu16,
        andu32: andu32,
    };
    return v89;
}
function clearArray() {
    const v93 = new Uint8Array(sab);
    var ui8 = v93;
    for (let i96 = 0; i96 < sab.byteLength; ++i96) {
        ui8[i96] = 0;
    }
}
function testElementType(a104, a105, a106) {
    clearArray();
    const v109 = new a104(sab, a106);
    var ta = v109;
    var name = Object.prototype.toString.call(ta);
    ta[0] = 127;
    a105(0, 15);
    ta[0];
    a105(0, 25);
    ta[0];
    function f129() {
        a105(-1, 0);
    }
    f129();
    function f135() {
        a105(ta.length, 0);
    }
    f135();
}
function testElement(a141, a142) {
    testElementType(Int8Array, a141.andi8, a142);
    testElementType(Int16Array, a141.andi16, a142);
    testElementType(Int32Array, a141.andi32, a142);
    testElementType(Uint8Array, a141.andu8, a142);
    testElementType(Uint16Array, a141.andu16, a142);
    testElementType(Uint32Array, a141.andu32, a142);
}
var offset = 0;
const v165 = new Array(16);
var sab = v165;
var m1 = Module(this, {}, sab, offset);
testElement(m1, offset);
offset = 32;
const v174 = new Array(64);
sab = v174;
var m2 = Module(this, {}, sab, offset);
testElement(m2, offset);
