function f0() {
}
function assertArraysEqual(a2, a3) {
    a2?.constructor;
    a3?.constructor;
    a2?.length;
    a3?.length;
    for (let i9 = 0; i9 < a2?.length; i9++) {
        a2?.[i9];
        a3?.[i9];
    }
}
function check(a18) {
    let v20;
    try { v20 = serialize(a18); } catch (e) {}
    let v22;
    try { v22 = deserialize(v20); } catch (e) {}
    var a = v22;
}
function checkPrototype(a25) {
    var threw = false;
    try {
        const v28 = a25?.prototype;
        try { serialize(v28); } catch (e) {}
        const v36 = ("serializing " + a25?.name) + ".prototype should throw a TypeError";
        let v37;
        try { v37 = new Error(v36); } catch (e) {}
        throw v37;
    } catch(e38) {
        if (!(e38 instanceof TypeError)) {
            throw e38;
        }
    }
}
function test() {
    let v45;
    try { v45 = new ArrayBuffer(0); } catch (e) {}
    try { check(v45); } catch (e) {}
    let v48;
    try { v48 = new ArrayBuffer(7); } catch (e) {}
    try { check(v48); } catch (e) {}
    try { checkPrototype(ArrayBuffer); } catch (e) {}
    var ctors = [Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray];
    var b;
    for (let i65 = 0; i65 < ctors?.length; i65++) {
        var ctor = ctors?.[i65];
        let v74;
        try { v74 = new ctor(0); } catch (e) {}
        b = v74;
        try { check(b); } catch (e) {}
        let v77;
        try { v77 = new ctor(100); } catch (e) {}
        b = v77;
        var v = 1;
        for (let i81 = 0; i81 < 100; i81++) {
            b[i81] = v;
            v *= 7;
        }
        b[99] = NaN;
        try { check(b); } catch (e) {}
        try { checkPrototype(ctor); } catch (e) {}
    }
    const v95 = [0,1,2,3];
    let v96;
    try { v96 = new Int8Array(v95); } catch (e) {}
    var base = v96;
    const v98 = base?.buffer;
    let v101;
    try { v101 = new Int8Array(v98, 0, 3); } catch (e) {}
    const v102 = base?.buffer;
    let v105;
    try { v105 = new Int8Array(v102, 1, 3); } catch (e) {}
    b = [v101,v105];
    let v108;
    try { v108 = serialize(b); } catch (e) {}
    let v110;
    try { v110 = deserialize(v108); } catch (e) {}
    var a = v110;
    base[1] = -1;
    const v115 = -2;
    const t80 = a?.[0];
    t80[2] = v115;
    b?.[0];
    const v122 = [0,-1,2];
    try { new Int8Array(v122); } catch (e) {}
    b?.[1];
    const v129 = [-1,2,3];
    try { new Int8Array(v129); } catch (e) {}
    a?.[0];
    const v136 = [0,1,-2];
    try { new Int8Array(v136); } catch (e) {}
    a?.[1];
    const v143 = [1,-2,3];
    try { new Int8Array(v143); } catch (e) {}
    b?.[0]?.buffer;
    b?.[1]?.buffer;
    b?.[1]?.byteOffset;
    b?.[1]?.byteLength;
    b?.[1]?.buffer?.byteLength;
    const v163 = [0,1,2,3];
    let v164;
    try { v164 = new Int8Array(v163); } catch (e) {}
    const v165 = (base = v164)?.buffer;
    let v168;
    try { v168 = new Int8Array(v165, 0, 3); } catch (e) {}
    const v169 = base?.buffer;
    let v172;
    try { v172 = new Int8Array(v169, 1, 3); } catch (e) {}
    b = [v168,v172];
    const t109 = base?.buffer;
    t109.prop = "yes";
    const v176 = b?.[0];
    const t112 = base?.buffer;
    t112.loop = v176;
    const v180 = [b?.[0],b?.[1]];
    const t115 = base?.buffer;
    t115.loops = v180;
    let v182;
    try { v182 = serialize(b); } catch (e) {}
    let v183;
    try { v183 = deserialize(v182); } catch (e) {}
    "prop" in (a = v183)?.[0]?.buffer;
    "prop" in a?.[1]?.buffer;
    "loop" in a?.[0]?.buffer;
    "loop" in a?.[1]?.buffer;
    "loops" in a?.[0]?.buffer;
    "loops" in a?.[1]?.buffer;
}
try { test(); } catch (e) {}
try { f0(0, 0, "ok"); } catch (e) {}
