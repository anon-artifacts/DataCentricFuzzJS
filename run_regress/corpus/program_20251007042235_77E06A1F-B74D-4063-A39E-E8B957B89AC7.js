function f0() {
}
var max = 40;
function escape_object(a4) {
    if (a4?.e) {
        try { f0(a4); } catch (e) {}
    }
}
var func = null;
function f9(a10, a11) {
    with ({}) {
    }
    if (a10 == (max - 1)) {
        return funname?.arguments?.[1]?.d;
    }
    return a11;
}
var check_object_argument_func = f9;
function test_object_ref(a22, a23) {
    const v26 = (2 * a22) / max;
    let v29;
    try { v29 = Math.pow(v26, 0); } catch (e) {}
    let v30;
    try { v30 = Math.fround(v29); } catch (e) {}
    const v33 = (2 * a22) / max;
    let v35;
    try { v35 = Math.pow(v33, 25); } catch (e) {}
    let v36;
    try { v36 = Math.fround(v35); } catch (e) {}
    const v39 = (2 * a22) / max;
    let v41;
    try { v41 = Math.pow(v39, 50); } catch (e) {}
    let v42;
    try { v42 = Math.fround(v41); } catch (e) {}
    a23.d = (a23 = { a: v30, b: v36, c: v42, d: 0 })?.a + a23?.b;
    try { escape_object(a23); } catch (e) {}
}
function test_object(a50, a51) {
    const v54 = (2 * a50) / max;
    let v57;
    try { v57 = Math.pow(v54, 0); } catch (e) {}
    let v58;
    try { v58 = Math.fround(v57); } catch (e) {}
    const v61 = (2 * a50) / max;
    let v63;
    try { v63 = Math.pow(v61, 25); } catch (e) {}
    let v64;
    try { v64 = Math.fround(v63); } catch (e) {}
    const v67 = (2 * a50) / max;
    let v69;
    try { v69 = Math.pow(v67, 50); } catch (e) {}
    let v70;
    try { v70 = Math.fround(v69); } catch (e) {}
    a51.d = (a51 = { a: v58, b: v64, c: v70, d: 0 })?.a + a51?.b;
}
function escape_array(a77) {
    if (a77?.length == 0) {
        try { f0(a77); } catch (e) {}
    }
}
function f82(a83, a84) {
    with ({}) {
    }
    if (a83 == (max - 1)) {
        return funname?.arguments?.[1]?.[3];
    }
    return a84;
}
var check_array_argument_func = f82;
var test_array_ref_check = true;
function test_array_ref(a97, a98) {
    const v101 = (2 * a97) / max;
    let v104;
    try { v104 = Math.pow(v101, 0); } catch (e) {}
    let v105;
    try { v105 = Math.fround(v104); } catch (e) {}
    const v108 = (2 * a97) / max;
    let v110;
    try { v110 = Math.pow(v108, 25); } catch (e) {}
    let v111;
    try { v111 = Math.fround(v110); } catch (e) {}
    const v114 = (2 * a97) / max;
    let v116;
    try { v116 = Math.pow(v114, 50); } catch (e) {}
    let v117;
    try { v117 = Math.fround(v116); } catch (e) {}
    a98[3] = (a98 = [v105,v111,v117,0])?.[0] + a98?.[1];
    try { escape_array(a98); } catch (e) {}
    const v124 = a98?.[2];
    const v125 = a98?.[3];
    let v126;
    try { v126 = Math.fround(v125); } catch (e) {}
    const v127 = v124 + v126;
    let v128;
    try { v128 = Math.fround(v127); } catch (e) {}
    let v129;
    try { v129 = test_array_ref_check(a97, v128); } catch (e) {}
    return v129;
}
var test_array_check = true;
function test_array(a133, a134) {
    const v137 = (2 * a133) / max;
    let v140;
    try { v140 = Math.pow(v137, 0); } catch (e) {}
    let v141;
    try { v141 = Math.fround(v140); } catch (e) {}
    const v144 = (2 * a133) / max;
    let v146;
    try { v146 = Math.pow(v144, 25); } catch (e) {}
    let v147;
    try { v147 = Math.fround(v146); } catch (e) {}
    const v150 = (2 * a133) / max;
    let v152;
    try { v152 = Math.pow(v150, 50); } catch (e) {}
    let v153;
    try { v153 = Math.fround(v152); } catch (e) {}
    a134[3] = (a134 = [v141,v147,v153,0])?.[0] + a134?.[1];
    const v159 = a134?.[2];
    const v160 = a134?.[3];
    let v161;
    try { v161 = Math.fround(v160); } catch (e) {}
    const v162 = v159 + v161;
    let v163;
    try { v163 = Math.fround(v162); } catch (e) {}
    let v164;
    try { v164 = test_array_check(a133, v163); } catch (e) {}
    return v164;
}
for (let i166 = 0; i166 < max; i166++) {
    try { test_object_ref(i166, undefined); } catch (e) {}
    try { test_object(i166, undefined); } catch (e) {}
    try { test_array_ref(i166, undefined); } catch (e) {}
    try { test_array(i166, undefined); } catch (e) {}
}
