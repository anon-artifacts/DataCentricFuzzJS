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
    var store = a1.Atomics.store;
    var fround = a1.Math.fround;
    function storei8(a30, a31) {
        a30 = a30 | 0;
        a31 = a31 | 0;
        let v36;
        try { v36 = store(MEM8, a30, a31); } catch (e) {}
        return v36 | 0;
    }
    function storei16(a40, a41) {
        a40 = a40 | 0;
        a41 = a41 | 0;
        let v46;
        try { v46 = store(MEM16, a40, a41); } catch (e) {}
        return v46 | 0;
    }
    function storei32(a50, a51) {
        a50 = a50 | 0;
        a51 = a51 | 0;
        let v56;
        try { v56 = store(MEM32, a50, a51); } catch (e) {}
        return v56 | 0;
    }
    function storeu8(a60, a61) {
        a60 = a60 | 0;
        a61 = a61 >>> 0;
        let v66;
        try { v66 = store(MEMU8, a60, a61); } catch (e) {}
        return v66 >>> 0;
    }
    function storeu16(a70, a71) {
        a70 = a70 | 0;
        a71 = a71 >>> 0;
        let v76;
        try { v76 = store(MEMU16, a70, a71); } catch (e) {}
        return v76 >>> 0;
    }
    function storeu32(a80, a81) {
        a80 = a80 | 0;
        a81 = a81 >>> 0;
        let v86;
        try { v86 = store(MEMU32, a80, a81); } catch (e) {}
        return v86 >>> 0;
    }
    const v89 = {
        storei8: storei8,
        storei16: storei16,
        storei32: storei32,
        storeu8: storeu8,
        storeu16: storeu16,
        storeu32: storeu32,
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
    a105(0, 10);
    ta[0];
    function f122() {
        a105(-1, 0);
    }
    f122();
    function f128() {
        a105(ta.length, 0);
    }
    f128();
}
function testElement(a134, a135) {
    testElementType(Int8Array, a134.storei8, a135);
    testElementType(Int16Array, a134.storei16, a135);
    testElementType(Int32Array, a134.storei32, a135);
    testElementType(Uint8Array, a134.storeu8, a135);
    testElementType(Uint16Array, a134.storeu16, a135);
    testElementType(Uint32Array, a134.storeu32, a135);
}
var offset = 0;
const v158 = new Array(16);
var sab = v158;
var m1 = Module(this, {}, sab, offset);
testElement(m1, offset);
offset = 32;
const v167 = new Array(64);
sab = v167;
var m2 = Module(this, {}, sab, offset);
testElement(m2, offset);
