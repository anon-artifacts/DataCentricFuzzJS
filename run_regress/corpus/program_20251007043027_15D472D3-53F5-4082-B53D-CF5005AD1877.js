var typedArrayConstructors = [Uint8Array,Int8Array,Uint16Array,Int16Array,Uint32Array,Int32Array,Uint8ClampedArray,Float32Array,Float64Array];
function assertArrayLikeEquals(a12, a13, a14) {
    a12?.__proto__;
    a14?.prototype;
    for (let i18 = 0; i18 < a13?.length; ++i18) {
        a13?.[i18];
        a12?.[i18];
    }
}
for (const v26 of typedArrayConstructors) {
    const v30 = [100,7,45];
    let v31;
    try { v31 = new v26(v30); } catch (e) {}
    var a = v31;
    try { a.sort(); } catch (e) {}
    [7,45,100];
    a?.length;
    if ((v26 === Float32Array) || (v26 === Float64Array)) {
        const v52 = [+0,-0,NaN,-0,NaN,+0];
        let v53;
        try { v53 = new v26(v52); } catch (e) {}
        var b = v53;
        try { b.sort(); } catch (e) {}
        [-0,-0,+0,+0,NaN,NaN];
        b?.length;
    }
    function f67(a68, a69) {
        return a69 - a68;
    }
    try { a.sort(f67); } catch (e) {}
    [100,45,7];
    const v78 = { value: 1 };
    try { Object.defineProperty(a, "length", v78); } catch (e) {}
    try { a.sort(); } catch (e) {}
    [7,45,100];
    a?.length;
    function f88() {
        const v89 = [];
        const v90 = a?.sort;
        try { v90.call(v89); } catch (e) {}
    }
    try { f88(); } catch (e) {}
    const v97 = v26?.BYTES_PER_ELEMENT * 3;
    let v98;
    try { v98 = new ArrayBuffer(v97); } catch (e) {}
    var buf = v98;
    const v100 = v26?.BYTES_PER_ELEMENT;
    let v101;
    try { v101 = new v26(buf, v100); } catch (e) {}
    var a = v101;
    let v103;
    try { v103 = new v26(buf); } catch (e) {}
    var b = v103;
    b[0] = 3;
    b[1] = 2;
    b[2] = 1;
    try { a.sort(); } catch (e) {}
    [1,2];
    const v122 = [1,2,3,4,5,6,7,8,9,10];
    let v123;
    try { v123 = new v26(v122); } catch (e) {}
    var array = v123;
    const v125 = () => {
        let v126;
        try { v126 = array.sort(); } catch (e) {}
        return v126;
    };
    try { v125(); } catch (e) {}
}
const v135 = [255,254,4,3,2,1,0];
const v136 = { ctor: Uint8Array, array: v135 };
const v147 = [127,126,1,0,-1,-127,-128];
const v148 = { ctor: Int8Array, array: v147 };
const v164 = [(2 ** 16) - 1,(2 ** 16) - 2,4,3,2,1,0];
const v165 = { ctor: Uint16Array, array: v164 };
const v190 = [(2 ** 15) - 1,(2 ** 15) - 2,1,0,-1,-((2 ** 15) - 1),-(2 ** 15)];
const v191 = { ctor: Int16Array, array: v190 };
const v207 = [(2 ** 32) - 1,(2 ** 32) - 2,4,3,2,1,0];
const v208 = { ctor: Uint32Array, array: v207 };
const v233 = [(2 ** 31) - 1,(2 ** 31) - 2,1,0,-1,-((2 ** 31) - 1),-(2 ** 31)];
const v234 = { ctor: Int32Array, array: v233 };
const v257 = [2 ** 24,(2 ** 24) - 1,1,0,-1,-((2 ** 24) - 1),-(2 ** 24)];
const v258 = { ctor: Float32Array, array: v257 };
const v281 = [2 ** 53,(2 ** 53) - 1,1,0,-1,-((2 ** 53) - 1),-(2 ** 53)];
const v282 = { ctor: Float64Array, array: v281 };
const v290 = [255,254,4,3,2,1,0];
const v291 = { ctor: Uint8ClampedArray, array: v290 };
const v308 = [(2 ** 64) - 1,(2 ** 64) - 2,4,3,2,1,0];
const v309 = { ctor: BigUint64Array, array: v308 };
const v335 = [(2 ** 63) - 1,(2 ** 63) - 2,1,0,-1,-((2 ** 63) - 1),-(2 ** 63)];
let constructorsWithArrays = [v136,v148,v165,v191,v208,v234,v258,v282,v291,v309,{ ctor: BigInt64Array, array: v335 }];
function cmpfn(a340, a341) {
    if (a340 < a341) {
        return -1;
    }
    if (a341 < a340) {
        return 1;
    }
    return 0;
}
for (const v348 of constructorsWithArrays) {
    const v349 = v348?.ctor;
    const v350 = v348?.array;
    let v351;
    try { v351 = new v349(v350); } catch (e) {}
    let array = v351;
    try { array.sort(cmpfn); } catch (e) {}
    const v354 = v348?.array;
    try { v354.reverse(); } catch (e) {}
    v348?.ctor;
    array?.length;
    v348?.array?.length;
}
