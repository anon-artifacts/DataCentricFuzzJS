function assertInstance(a1, a2) {
    a1?.constructor;
    try { a2(); } catch (e) {}
    try { a2(); } catch (e) {}
}
function f(a7) {
    a7[0] = 0;
    a7[1] = 0;
}
let v12;
try { v12 = new Int32Array(2); } catch (e) {}
var a = v12;
for (let i15 = 0; i15 < 5; i15++) {
    try { f(a); } catch (e) {}
}
try { f(a); } catch (e) {}
a?.[0];
a?.[1];
let v29;
try { v29 = new ArrayBuffer(12); } catch (e) {}
var ab = v29;
let v32;
try { v32 = new Uint8Array(ab); } catch (e) {}
var derived_uint8 = v32;
derived_uint8?.buffer;
derived_uint8?.length;
derived_uint8?.byteLength;
derived_uint8?.byteOffset;
derived_uint8?.BYTES_PER_ELEMENT;
let v44;
try { v44 = new Uint8Array(ab, 7); } catch (e) {}
var derived_uint8_2 = v44;
derived_uint8_2?.buffer;
derived_uint8_2?.length;
derived_uint8_2?.byteLength;
derived_uint8_2?.byteOffset;
derived_uint8_2?.BYTES_PER_ELEMENT;
let v56;
try { v56 = new Int16Array(ab); } catch (e) {}
var derived_int16 = v56;
derived_int16?.buffer;
derived_int16?.length;
derived_int16?.byteLength;
derived_int16?.byteOffset;
derived_int16?.BYTES_PER_ELEMENT;
let v68;
try { v68 = new Int16Array(ab, 6); } catch (e) {}
var derived_int16_2 = v68;
derived_int16_2?.buffer;
derived_int16_2?.length;
derived_int16_2?.byteLength;
derived_int16_2?.byteOffset;
derived_int16_2?.BYTES_PER_ELEMENT;
let v80;
try { v80 = new Uint32Array(ab); } catch (e) {}
var derived_uint32 = v80;
derived_uint32?.buffer;
derived_uint32?.length;
derived_uint32?.byteLength;
derived_uint32?.byteOffset;
derived_uint32?.BYTES_PER_ELEMENT;
let v92;
try { v92 = new Uint32Array(ab, 4); } catch (e) {}
var derived_uint32_2 = v92;
derived_uint32_2?.buffer;
derived_uint32_2?.length;
derived_uint32_2?.byteLength;
derived_uint32_2?.byteOffset;
derived_uint32_2?.BYTES_PER_ELEMENT;
let v105;
try { v105 = new Uint32Array(ab, 4, 1); } catch (e) {}
var derived_uint32_3 = v105;
derived_uint32_3?.buffer;
derived_uint32_3?.length;
derived_uint32_3?.byteLength;
derived_uint32_3?.byteOffset;
derived_uint32_3?.BYTES_PER_ELEMENT;
let v119;
try { v119 = new Float64Array(ab, 0, 1); } catch (e) {}
var derived_float64 = v119;
derived_float64?.buffer;
derived_float64?.length;
derived_float64?.byteLength;
derived_float64?.byteOffset;
derived_float64?.BYTES_PER_ELEMENT;
function abfunc3() {
    try { new Uint32Array(ab, 4, 3); } catch (e) {}
}
try { abfunc3(); } catch (e) {}
function abfunc4() {
    try { new Uint32Array(ab, 16); } catch (e) {}
}
try { abfunc4(); } catch (e) {}
function abfunc5() {
    try { new Uint32Array(ab, 5); } catch (e) {}
}
try { abfunc5(); } catch (e) {}
let v144;
try { v144 = new ArrayBuffer(13); } catch (e) {}
var ab2 = v144;
function abfunc6() {
    try { new Uint32Array(ab2, 4); } catch (e) {}
}
try { abfunc6(); } catch (e) {}
let v151;
try { v151 = new Uint8Array(31); } catch (e) {}
a = v151;
a?.byteLength;
a?.buffer?.byteLength;
a?.length;
a?.buffer?.byteLength;
a?.length * a?.BYTES_PER_ELEMENT;
a?.buffer?.byteLength;
let v164;
try { v164 = new Int16Array(5); } catch (e) {}
a = v164;
a?.byteLength;
a?.buffer?.byteLength;
a?.length * a?.BYTES_PER_ELEMENT;
a?.buffer?.byteLength;
let v174;
try { v174 = new Float64Array(7); } catch (e) {}
a = v174;
a?.byteLength;
a?.buffer?.byteLength;
a?.length * a?.BYTES_PER_ELEMENT;
a?.buffer?.byteLength;
let v184;
try { v184 = new Float64Array(7); } catch (e) {}
a = v184;
a?.buffer;
const v187 = a?.buffer;
let v188;
try { v188 = new Uint16Array(v187); } catch (e) {}
v188?.buffer;
a?.buffer;
const v192 = a?.buffer;
let v194;
try { v194 = new Float32Array(v192, 4); } catch (e) {}
v194?.buffer;
a?.buffer;
const v198 = a?.buffer;
let v201;
try { v201 = new Int8Array(v198, 3, 51); } catch (e) {}
v201?.buffer;
a?.buffer;
let v205;
try { v205 = new Int32Array(2); } catch (e) {}
a = v205;
a?.BYTES_PER_ELEMENT;
a.BYTES_PER_ELEMENT = 42;
let v210;
try { v210 = new Uint8Array(2); } catch (e) {}
a = v210;
a?.BYTES_PER_ELEMENT;
let v214;
try { v214 = new Int16Array(2); } catch (e) {}
a = v214;
a?.BYTES_PER_ELEMENT;
function get(a218, a219) {
    return a218?.[a219];
}
function set(a222, a223, a224) {
    a222[a223] = a224;
}
function temp() {
    let v227;
    try { v227 = new Float64Array(2); } catch (e) {}
    var array = v227;
    for (let i230 = 0; i230 < 5; i230++) {
        try { set(array, 0, 2.5); } catch (e) {}
        array?.[0];
    }
    try { set(array, 0, 2.5); } catch (e) {}
    array?.[0];
    try { set(array, 1, 3.5); } catch (e) {}
    array?.[1];
    for (let i252 = 0; i252 < 5; i252++) {
        try { get(array, 0); } catch (e) {}
        array?.[1];
    }
    try { get(array, 0); } catch (e) {}
    try { get(array, 1); } catch (e) {}
}
let v270;
try { v270 = new Int32Array("2"); } catch (e) {}
var array_with_length_from_non_number = v270;
array_with_length_from_non_number?.length;
types = [Array,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Uint8ClampedArray,Float32Array,Float64Array];
test_result_nan = [NaN,0,0,0,0,0,0,0,NaN,NaN];
test_result_low_int = [-1,-1,255,-1,65535,-1,4294967295,0,-1,-1];
test_result_low_double = [-1.25,-1,255,-1,65535,-1,4294967295,0,-1.25,-1.25];
test_result_middle = [253.75,-3,253,253,253,253,253,254,253.75,253.75];
test_result_high_int = [256,0,0,256,256,256,256,255,256,256];
test_result_high_double = [256.25,0,0,256,256,256,256,255,256.25,256.25];
const kElementCount = 40;
function test_load(a364, a365) {
    for (let i367 = 0; i367 < kElementCount; i367++) {
        a365 += a364?.[i367];
    }
    return a365;
}
function test_load_const_key(a374, a375) {
    a375 += a374?.[0];
    a375 += a374?.[1];
    a375 += a374?.[2];
    return a375;
}
function test_store(a380, a381) {
    for (let i383 = 0; i383 < kElementCount; i383++) {
        const v389 = i383 + 1;
        a380[i383] = v389;
        a381 += v389;
    }
    return a381;
}
function test_store_const_key(a391, a392) {
    a391[0] = 1;
    a392 += 1;
    a391[1] = 2;
    a392 += 2;
    a391[2] = 3;
    a392 += 3;
    return a392;
}
function zero() {
    return 0;
}
function test_store_middle_tagged(a399, a400) {
    a399[0] = 253.75;
    return a399?.[0];
}
function test_store_high_tagged(a404, a405) {
    a404[0] = 256.25;
    return a404?.[0];
}
function test_store_middle_double(a409, a410) {
    let v412;
    try { v412 = zero(); } catch (e) {}
    a409[0] = 253.75 + v412;
    return a409?.[0];
}
function test_store_high_double(a416, a417) {
    let v419;
    try { v419 = zero(); } catch (e) {}
    a416[0] = 256.25 + v419;
    return a416?.[0];
}
function test_store_high_double(a423, a424) {
    a423[0] = 256.25;
    return a423?.[0];
}
function test_store_low_int(a428, a429) {
    a428[0] = -1;
    return a428?.[0];
}
function test_store_low_tagged(a434, a435) {
    a434[0] = -1.25;
    return a434?.[0];
}
function test_store_low_double(a440, a441) {
    const v443 = -1.25;
    let v444;
    try { v444 = zero(); } catch (e) {}
    a440[0] = v443 + v444;
    return a440?.[0];
}
function test_store_high_int(a448, a449) {
    a448[0] = 256;
    return a448?.[0];
}
function test_store_nan(a453, a454) {
    a453[0] = NaN;
    return a453?.[0];
}
const kRuns = 10;
function run_test(a459, a460, a461) {
    for (let i463 = 0; i463 < 5; i463++) {
        try { a459(a460, 0); } catch (e) {}
    }
    var sum = 0;
    for (let i474 = 0; i474 < kRuns; i474++) {
        let v479;
        try { v479 = a459(a460, sum); } catch (e) {}
        sum = v479;
    }
}
function run_bounds_test(a481, a482, a483) {
    a?.[kElementCount];
    a[kElementCount] = 456;
    a?.[kElementCount];
    a?.[kElementCount + 1];
    a[kElementCount + 1] = 456;
    a?.[kElementCount + 1];
}
for (let i501 = 0; i501 < types?.length; i501++) {
    var type = types?.[i501];
    let v511;
    try { v511 = new type(kElementCount); } catch (e) {}
    var a = v511;
    for (let i514 = 0; i514 < kElementCount; i514++) {
        a[i514] = i514;
    }
    const v520 = 780 * kRuns;
    try { run_test(test_load, a, v520); } catch (e) {}
    const v523 = 3 * kRuns;
    try { run_test(test_load_const_key, a, v523); } catch (e) {}
    const v526 = 820 * kRuns;
    try { run_test(test_store, a, v526); } catch (e) {}
    const v529 = 6 * kRuns;
    try { run_test(test_store_const_key, a, v529); } catch (e) {}
    const v532 = test_result_low_int?.[i501];
    try { run_test(test_store_low_int, a, v532); } catch (e) {}
    const v535 = test_result_low_double?.[i501];
    try { run_test(test_store_low_double, a, v535); } catch (e) {}
    const v537 = test_result_low_double?.[i501];
    try { run_test(test_store_low_tagged, a, v537); } catch (e) {}
    const v540 = test_result_high_int?.[i501];
    try { run_test(test_store_high_int, a, v540); } catch (e) {}
    const v543 = test_result_nan?.[i501];
    try { run_test(test_store_nan, a, v543); } catch (e) {}
    const v546 = test_result_middle?.[i501];
    try { run_test(test_store_middle_double, a, v546); } catch (e) {}
    const v548 = test_result_middle?.[i501];
    try { run_test(test_store_middle_tagged, a, v548); } catch (e) {}
    const v551 = test_result_high_double?.[i501];
    try { run_test(test_store_high_double, a, v551); } catch (e) {}
    const v553 = test_result_high_double?.[i501];
    try { run_test(test_store_high_tagged, a, v553); } catch (e) {}
    if (i501 != 0) {
        a?.length;
        a.length = 2;
        a?.length;
        delete a?.length;
        try { run_bounds_test(a); } catch (e) {}
        try { run_bounds_test(a); } catch (e) {}
        try { run_bounds_test(a); } catch (e) {}
        try { run_bounds_test(a); } catch (e) {}
    }
    function array_load_set_smi_check(a566) {
        a566[0] = 1;
        a566[0] = 1;
        return 1;
    }
    try { array_load_set_smi_check(a); } catch (e) {}
    try { array_load_set_smi_check(0); } catch (e) {}
    function array_load_set_smi_check2(a572) {
        a572[0] = 1;
        a572[0] = 1;
        return 1;
    }
    try { array_load_set_smi_check2(a); } catch (e) {}
    try { array_load_set_smi_check2(a); } catch (e) {}
    try { array_load_set_smi_check2(0); } catch (e) {}
}
function store_float32_undefined(a579) {
    a579[0] = undefined;
}
let v582;
try { v582 = new Float32Array(1); } catch (e) {}
var float32_array = v582;
try { store_float32_undefined(float32_array); } catch (e) {}
const v585 = float32_array?.[0];
try { isNaN(v585); } catch (e) {}
try { store_float32_undefined(float32_array); } catch (e) {}
const v589 = float32_array?.[0];
try { isNaN(v589); } catch (e) {}
try { store_float32_undefined(float32_array); } catch (e) {}
const v592 = float32_array?.[0];
try { isNaN(v592); } catch (e) {}
function store_float64_undefined(a595) {
    a595[0] = undefined;
}
let v598;
try { v598 = new Float64Array(1); } catch (e) {}
var float64_array = v598;
try { store_float64_undefined(float64_array); } catch (e) {}
const v601 = float64_array?.[0];
try { isNaN(v601); } catch (e) {}
try { store_float64_undefined(float64_array); } catch (e) {}
const v604 = float64_array?.[0];
try { isNaN(v604); } catch (e) {}
try { store_float64_undefined(float64_array); } catch (e) {}
const v607 = float64_array?.[0];
try { isNaN(v607); } catch (e) {}
let v610;
try { v610 = new ArrayBuffer(0); } catch (e) {}
ab = v610;
ab?.byteLength;
let v613;
try { v613 = new Int8Array(ab); } catch (e) {}
a = v613;
a?.byteLength;
a?.length;
a[0] = 1;
a?.[0];
let v622;
try { v622 = new ArrayBuffer(16); } catch (e) {}
ab = v622;
let v625;
try { v625 = new Float32Array(ab, 4, 0); } catch (e) {}
a = v625;
a?.byteLength;
a?.length;
a[0] = 1;
a?.[0];
let v634;
try { v634 = new Uint16Array(0); } catch (e) {}
a = v634;
a?.byteLength;
a?.length;
a[0] = 1;
a?.[0];
const v642 = [];
let v643;
try { v643 = new Uint32Array(v642); } catch (e) {}
a = v643;
a?.length;
a?.byteLength;
a?.buffer?.byteLength;
a?.BYTES_PER_ELEMENT;
a?.buffer;
const v657 = [1,2,3];
let v658;
try { v658 = new Uint16Array(v657); } catch (e) {}
a = v658;
a?.length;
a?.byteLength;
a?.buffer?.byteLength;
a?.BYTES_PER_ELEMENT;
a?.[0];
a?.[2];
a?.buffer;
let v673;
try { v673 = new Uint32Array(a); } catch (e) {}
a = v673;
a?.length;
a?.byteLength;
a?.buffer?.byteLength;
a?.BYTES_PER_ELEMENT;
a?.[0];
a?.[2];
a?.buffer;
const v694 = [1,2,3,4,5,6];
let v695;
try { v695 = new Uint16Array(v694); } catch (e) {}
a = v695;
let v697;
try { v697 = a.subarray(3); } catch (e) {}
aa = v697;
aa?.length;
aa?.byteLength;
aa?.BYTES_PER_ELEMENT;
a?.buffer;
aa?.buffer;
let v710;
try { v710 = a.subarray(3, 5); } catch (e) {}
aa = v710;
aa?.length;
aa?.byteLength;
aa?.BYTES_PER_ELEMENT;
a?.buffer;
aa?.buffer;
let v721;
try { v721 = a.subarray(4, 8); } catch (e) {}
aa = v721;
aa?.length;
aa?.byteLength;
aa?.BYTES_PER_ELEMENT;
a?.buffer;
aa?.buffer;
let v731;
try { v731 = a.subarray(9); } catch (e) {}
aa = v731;
aa?.length;
aa?.byteLength;
aa?.BYTES_PER_ELEMENT;
a?.buffer;
aa?.buffer;
const v741 = -4;
let v742;
try { v742 = a.subarray(v741); } catch (e) {}
aa = v742;
aa?.length;
aa?.byteLength;
aa?.BYTES_PER_ELEMENT;
a?.buffer;
aa?.buffer;
const v752 = -3;
const v754 = -1;
let v755;
try { v755 = a.subarray(v752, v754); } catch (e) {}
aa = v755;
aa?.length;
aa?.byteLength;
aa?.BYTES_PER_ELEMENT;
a?.buffer;
aa?.buffer;
let v766;
try { v766 = a.subarray(3, 2); } catch (e) {}
aa = v766;
aa?.length;
aa?.byteLength;
aa?.BYTES_PER_ELEMENT;
a?.buffer;
aa?.buffer;
const v776 = -3;
const v778 = -4;
let v779;
try { v779 = a.subarray(v776, v778); } catch (e) {}
aa = v779;
aa?.length;
aa?.byteLength;
aa?.BYTES_PER_ELEMENT;
a?.buffer;
aa?.buffer;
const v790 = -8;
let v791;
try { v791 = a.subarray(0, v790); } catch (e) {}
aa = v791;
aa?.length;
aa?.byteLength;
aa?.BYTES_PER_ELEMENT;
a?.buffer;
aa?.buffer;
function f800() {
    const v801 = {};
    const v803 = a?.subarray;
    try { v803.call(v801, 0); } catch (e) {}
}
try { f800(); } catch (e) {}
function f806() {
    const v807 = [];
    const v809 = a?.subarray;
    try { v809.call(v807, 0); } catch (e) {}
}
try { f806(); } catch (e) {}
function f812() {
    try { ArrayBuffer(100); } catch (e) {}
}
try { f812(); } catch (e) {}
function f817() {
    try { Int8Array(b, 5, 77); } catch (e) {}
}
try { f817(); } catch (e) {}
function f823() {
    try { ArrayBuffer.call(null, 10); } catch (e) {}
}
try { f823(); } catch (e) {}
function f828() {
    try { Uint16Array.call(null, b, 2, 4); } catch (e) {}
}
try { f828(); } catch (e) {}
function f835() {
    const v838 = [1000];
    try { ArrayBuffer.apply(null, v838); } catch (e) {}
}
try { f835(); } catch (e) {}
function f841() {
    const v846 = [b,128,1];
    try { Float32Array.apply(null, v846); } catch (e) {}
}
try { f841(); } catch (e) {}
let v850;
try { v850 = new ArrayBuffer(4); } catch (e) {}
var b = v850;
function assertArrayPrefix(a853, a854) {
    for (let i856 = 0; i856 < a853?.length; ++i856) {
        a853?.[i856];
        a854?.[i856];
    }
}
const v871 = [1,2,3,4,0,-1];
let v872;
try { v872 = new Int16Array(v871); } catch (e) {}
var a11 = v872;
let v875;
try { v875 = new Uint16Array(15); } catch (e) {}
var a12 = v875;
try { a12.set(a11, 3); } catch (e) {}
[0,0,0,1,2,3,4,0,65535,0,0];
function f891() {
    try { a11.set(a12); } catch (e) {}
}
try { f891(); } catch (e) {}
const v899 = -1;
function f900() {
    return 3;
}
var a21 = [1,,10,NaN,0,v899,{ valueOf: f900 }];
let v906;
try { v906 = new Int32Array(12); } catch (e) {}
var a22 = v906;
try { a22.set(a21, 2); } catch (e) {}
[0,0,1,0,10,0,0,-1,3,0];
const v932 = [2,4,6,8,11,NaN,1 / 0,-3];
let v933;
try { v933 = new Float32Array(v932); } catch (e) {}
var a31 = v933;
let v937;
try { v937 = a31.subarray(2, 6); } catch (e) {}
var a32 = v937;
try { a31.set(a32, 4); } catch (e) {}
[2,4,6,8,6,8,11,NaN];
[6,8,6,8];
const v958 = [3,2,5,6];
let v959;
try { v959 = new Uint8ClampedArray(v958); } catch (e) {}
var a4 = v959;
try { a4.set(a4); } catch (e) {}
[3,2,5,6];
let v968;
try { v968 = new ArrayBuffer(4); } catch (e) {}
var b = v968;
let v970;
try { v970 = new Int16Array(b); } catch (e) {}
var a5 = v970;
let v972;
try { v972 = new Int8Array(b); } catch (e) {}
var a50 = v972;
let v976;
try { v976 = new Int8Array(b, 0, 2); } catch (e) {}
var a51 = v976;
let v980;
try { v980 = new Int8Array(b, 1, 2); } catch (e) {}
var a52 = v980;
let v984;
try { v984 = new Int8Array(b, 2, 2); } catch (e) {}
var a53 = v984;
const v988 = [20560,2570];
try { a5.set(v988); } catch (e) {}
[80,80,10,10];
[80,80];
[80,10];
[10,10];
const v1008 = [80,80,10,10];
try { a50.set(v1008); } catch (e) {}
try { a51.set(a5); } catch (e) {}
[80,10,10,10];
const v1020 = [80,80,10,10];
try { a50.set(v1020); } catch (e) {}
try { a52.set(a5); } catch (e) {}
[80,80,10,10];
const v1032 = [80,80,10,10];
try { a50.set(v1032); } catch (e) {}
try { a53.set(a5); } catch (e) {}
[80,80,80,10];
const v1044 = [80,81,10,11];
try { a50.set(v1044); } catch (e) {}
try { a5.set(a51); } catch (e) {}
[80,81];
const v1054 = [80,81,10,11];
try { a50.set(v1054); } catch (e) {}
try { a5.set(a52); } catch (e) {}
[81,10];
const v1064 = [80,81,10,11];
try { a50.set(v1064); } catch (e) {}
try { a5.set(a53); } catch (e) {}
[10,11];
const v1072 = [1.2,12.3];
let v1073;
try { v1073 = new Float32Array(v1072); } catch (e) {}
var a61 = v1073;
let v1076;
try { v1076 = new Int32Array(2); } catch (e) {}
var a62 = v1076;
try { a62.set(a61); } catch (e) {}
[1,12];
try { a61.set(a62); } catch (e) {}
[1,12];
function f1086() {
    try { a.set(0); } catch (e) {}
}
try { f1086(); } catch (e) {}
[1,2,3,4,5,6];
const v1097 = {};
try { a.set(v1097); } catch (e) {}
[1,2,3,4,5,6];
const v1112 = [1,2,3,4,5,6];
let v1113;
try { v1113 = new Int8Array(v1112); } catch (e) {}
var a0 = v1113;
var b0 = a0?.buffer;
let v1118;
try { v1118 = b0.slice(0); } catch (e) {}
var b1 = v1118;
b0?.byteLength;
b1?.byteLength;
[1,2,3,4,5,6];
try { new Int8Array(b1); } catch (e) {}
let v1131;
try { v1131 = b0.slice(3); } catch (e) {}
var b2 = v1131;
b0?.byteLength - 3;
b2?.byteLength;
[4,5,6];
try { new Int8Array(b2); } catch (e) {}
let v1144;
try { v1144 = b0.slice(2, 4); } catch (e) {}
var b3 = v1144;
b3?.byteLength;
[3,4];
try { new Int8Array(b3); } catch (e) {}
function goo(a1153, a1154) {
    return a1153?.[a1154];
}
function boo(a1157, a1158, a1159) {
    a1157[a1158] = a1159;
    return a1159;
}
function do_tagged_index_external_array_test(a1161) {
    const v1168 = [1,2,3,4,5,6];
    let v1169;
    try { v1169 = new a1161(v1168); } catch (e) {}
    var t_array = v1169;
    try { goo(t_array, 0); } catch (e) {}
    try { goo(t_array, 0); } catch (e) {}
    try { boo(t_array, 0, 13); } catch (e) {}
    try { goo(t_array, 0); } catch (e) {}
    try { boo(t_array, 0, 15); } catch (e) {}
    try { goo(t_array, 0); } catch (e) {}
}
try { do_tagged_index_external_array_test(Int8Array); } catch (e) {}
try { do_tagged_index_external_array_test(Uint8Array); } catch (e) {}
try { do_tagged_index_external_array_test(Int16Array); } catch (e) {}
try { do_tagged_index_external_array_test(Uint16Array); } catch (e) {}
try { do_tagged_index_external_array_test(Int32Array); } catch (e) {}
try { do_tagged_index_external_array_test(Uint32Array); } catch (e) {}
try { do_tagged_index_external_array_test(Float32Array); } catch (e) {}
try { do_tagged_index_external_array_test(Float64Array); } catch (e) {}
let v1203;
try { v1203 = new Array(1, 2, 3, 4, 5, 6); } catch (e) {}
var built_in_array = v1203;
try { goo(built_in_array, 0); } catch (e) {}
try { goo(built_in_array, 0); } catch (e) {}
try { boo(built_in_array, 0, 11); } catch (e) {}
try { goo(built_in_array, 0); } catch (e) {}
let v1223;
try { v1223 = new Array(1.5, 2, 3, 4, 5, 6); } catch (e) {}
built_in_array = v1223;
try { goo(built_in_array, 0); } catch (e) {}
try { goo(built_in_array, 0); } catch (e) {}
try { boo(built_in_array, 0, 2.5); } catch (e) {}
try { goo(built_in_array, 0); } catch (e) {}
function checkRange() {
    let v1240;
    try { v1240 = Math.pow(2, 32); } catch (e) {}
    var e32 = v1240;
    let v1244;
    try { v1244 = Math.pow(2, 31); } catch (e) {}
    var e31 = v1244;
    let v1248;
    try { v1248 = Math.pow(2, 16); } catch (e) {}
    var e16 = v1248;
    let v1252;
    try { v1252 = Math.pow(2, 15); } catch (e) {}
    var e15 = v1252;
    let v1256;
    try { v1256 = Math.pow(2, 8); } catch (e) {}
    var e8 = v1256;
    let v1260;
    try { v1260 = Math.pow(2, 7); } catch (e) {}
    var e7 = v1260;
    let v1263;
    try { v1263 = new Uint32Array(2); } catch (e) {}
    var a7 = v1263;
    let v1266;
    try { v1266 = new Int32Array(2); } catch (e) {}
    var a71 = v1266;
    let v1269;
    try { v1269 = new Uint16Array(2); } catch (e) {}
    var a72 = v1269;
    let v1272;
    try { v1272 = new Int16Array(2); } catch (e) {}
    var a73 = v1272;
    let v1275;
    try { v1275 = new Uint8Array(2); } catch (e) {}
    var a74 = v1275;
    let v1278;
    try { v1278 = new Int8Array(2); } catch (e) {}
    var a75 = v1278;
    for (i = 1;
        (() => {
            let v1285;
            try { v1285 = Math.pow(2, 33); } catch (e) {}
            return i <= v1285;
        })();
        i *= 2) {
        var j = i - 1;
        a7[0] = i;
        a71[0] = i;
        a72[0] = i;
        a73[0] = i;
        a74[0] = i;
        a75[0] = i;
        a7[1] = j;
        a71[1] = j;
        a72[1] = j;
        a73[1] = j;
        a74[1] = j;
        a75[1] = j;
        if (i < e32) {
            a7?.[0];
        } else {
            a7?.[0];
        }
        if (j < e32) {
            a7?.[1];
        } else {
            a7?.[1];
            e32 - 1;
        }
        if (i < e31) {
            a71?.[0];
        } else {
            a71?.[0];
            i < e32 ? -e31 : 0;
        }
        if (j < e31) {
            a71?.[1];
        } else {
            a71?.[1];
            -1;
        }
        if (i < e16) {
            a72?.[0];
        } else {
            a72?.[0];
        }
        if (j < e16) {
            a72?.[1];
        } else {
            a72?.[1];
            e16 - 1;
        }
        if (i < e15) {
            a73?.[0];
        } else {
            a73?.[0];
            i < e16 ? -e15 : 0;
        }
        if (j < e15) {
            a73?.[1];
        } else {
            a73?.[1];
            -1;
        }
        if (i < e8) {
            a74?.[0];
        } else {
            a74?.[0];
        }
        if (j < e8) {
            a74?.[1];
        } else {
            a74?.[1];
            e8 - 1;
        }
        if (i < e7) {
            a75?.[0];
        } else {
            a75?.[0];
            i < e8 ? -e7 : 0;
        }
        if (j < e7) {
            a75?.[1];
        } else {
            a75?.[1];
            -1;
        }
    }
}
try { checkRange(); } catch (e) {}
