function TestByteLength(a1, a2) {
    let v4;
    try { v4 = new ArrayBuffer(a1); } catch (e) {}
    var ab = v4;
    ab?.byteLength;
}
function TestArrayBufferCreation() {
    try { TestByteLength(1, 1); } catch (e) {}
    try { TestByteLength(256, 256); } catch (e) {}
    try { TestByteLength(2.567, 2); } catch (e) {}
    try { TestByteLength("abc", 0); } catch (e) {}
    try { TestByteLength(0, 0); } catch (e) {}
    function f23() {
        const v26 = -10;
        try { new ArrayBuffer(v26); } catch (e) {}
    }
    try { f23(); } catch (e) {}
    function f30() {
        const v33 = -2.567;
        try { new ArrayBuffer(v33); } catch (e) {}
    }
    try { f30(); } catch (e) {}
    let v37;
    try { v37 = new ArrayBuffer(); } catch (e) {}
    var ab = v37;
    ab?.byteLength;
    const v44 = Object?.prototype?.toString;
    try { v44.call(ab); } catch (e) {}
}
try { TestArrayBufferCreation(); } catch (e) {}
function TestByteLengthNotWritable() {
    let v50;
    try { v50 = new ArrayBuffer(1024); } catch (e) {}
    var ab = v50;
    ab?.byteLength;
    function f54() {
        'use strict';
        ab.byteLength = 42;
    }
    try { f54(); } catch (e) {}
}
try { TestByteLengthNotWritable(); } catch (e) {}
function TestSlice(a60, a61, a62, a63) {
    let v65;
    try { v65 = new ArrayBuffer(a61); } catch (e) {}
    var ab = v65;
    let v68;
    try { v68 = new Uint8Array(ab); } catch (e) {}
    var a1 = v68;
    for (let i71 = 0; i71 < a1?.length; i71++) {
        a1[i71] = 202;
    }
    let v78;
    try { v78 = ab.slice(a62, a63); } catch (e) {}
    var slice = v78;
    slice?.byteLength;
    let v81;
    try { v81 = new Uint8Array(slice); } catch (e) {}
    var a2 = v81;
    for (let i84 = 0; i84 < a2?.length; i84++) {
        a2?.[i84];
    }
}
function TestArrayBufferSlice() {
    let v95;
    try { v95 = new ArrayBuffer(1024); } catch (e) {}
    var ab = v95;
    let v99;
    try { v99 = ab.slice(512, 1024); } catch (e) {}
    var ab1 = v99;
    ab1?.byteLength;
    try { TestSlice(512, 1024, 512, 1024); } catch (e) {}
    try { TestSlice(512, 1024, 512); } catch (e) {}
    try { TestSlice(0, 0, 1, 20); } catch (e) {}
    try { TestSlice(100, 100, 0, 100); } catch (e) {}
    try { TestSlice(100, 100, 0, 1000); } catch (e) {}
    try { TestSlice(0, 100, 5, 1); } catch (e) {}
    const v135 = -11;
    const v137 = -10;
    try { TestSlice(1, 100, v135, v137); } catch (e) {}
    const v142 = -10;
    try { TestSlice(9, 100, v142, 99); } catch (e) {}
    const v148 = -10;
    try { TestSlice(0, 100, v148, 80); } catch (e) {}
    const v155 = -10;
    try { TestSlice(10, 100, 80, v155); } catch (e) {}
    try { TestSlice(10, 100, 90, "100"); } catch (e) {}
    try { TestSlice(10, 100, "90", "100"); } catch (e) {}
    try { TestSlice(0, 100, 90, "abc"); } catch (e) {}
    try { TestSlice(10, 100, "abc", 10); } catch (e) {}
    try { TestSlice(10, 100, 0.96, 10.96); } catch (e) {}
    try { TestSlice(10, 100, 0.96, 10.01); } catch (e) {}
    try { TestSlice(10, 100, 0.01, 10.01); } catch (e) {}
    try { TestSlice(10, 100, 0.01, 10.96); } catch (e) {}
    try { TestSlice(10, 100, 90); } catch (e) {}
    const v204 = -10;
    try { TestSlice(10, 100, v204); } catch (e) {}
}
try { TestArrayBufferSlice(); } catch (e) {}
function TestTypedArray(a208, a209, a210) {
    a208?.BYTES_PER_ELEMENT;
    const v214 = 256 * a209;
    let v215;
    try { v215 = new ArrayBuffer(v214); } catch (e) {}
    var ab = v215;
    let v218;
    try { v218 = new a208(30); } catch (e) {}
    var a0 = v218;
    ("[object " + a208?.name) + "]";
    const v227 = Object?.prototype?.toString;
    try { v227.call(a0); } catch (e) {}
    try { ArrayBuffer.isView(a0); } catch (e) {}
    a0?.BYTES_PER_ELEMENT;
    a0?.length;
    30 * a209;
    a0?.byteLength;
    a0?.byteOffset;
    30 * a209;
    a0?.buffer?.byteLength;
    let v243;
    try { v243 = new a208(0); } catch (e) {}
    var aLen0 = v243;
    aLen0?.BYTES_PER_ELEMENT;
    aLen0?.length;
    aLen0?.byteLength;
    aLen0?.byteOffset;
    aLen0?.buffer?.byteLength;
    const v256 = 128 * a209;
    let v258;
    try { v258 = new a208(ab, v256, 0); } catch (e) {}
    var aOverBufferLen0 = v258;
    aOverBufferLen0?.buffer;
    aOverBufferLen0?.BYTES_PER_ELEMENT;
    aOverBufferLen0?.length;
    aOverBufferLen0?.byteLength;
    128 * a209;
    aOverBufferLen0?.byteOffset;
    const v270 = 128 * a209;
    let v272;
    try { v272 = new a208(ab, v270, 128); } catch (e) {}
    var a1 = v272;
    a1?.buffer;
    a1?.BYTES_PER_ELEMENT;
    a1?.length;
    128 * a209;
    a1?.byteLength;
    128 * a209;
    a1?.byteOffset;
    const v285 = 64 * a209;
    let v287;
    try { v287 = new a208(ab, v285, 128); } catch (e) {}
    var a2 = v287;
    a2?.buffer;
    a2?.BYTES_PER_ELEMENT;
    a2?.length;
    128 * a209;
    a2?.byteLength;
    64 * a209;
    a2?.byteOffset;
    const v300 = 192 * a209;
    let v301;
    try { v301 = new a208(ab, v300); } catch (e) {}
    var a3 = v301;
    a3?.buffer;
    a3?.length;
    64 * a209;
    a3?.byteLength;
    192 * a209;
    a3?.byteOffset;
    let v312;
    try { v312 = new a208(ab); } catch (e) {}
    var a4 = v312;
    a4?.buffer;
    a4?.length;
    256 * a209;
    a4?.byteLength;
    a4?.byteOffset;
    var i;
    for ((() => {
            i = 0;
        })();
        i < 128;
        i++) {
        a1[i] = a210;
    }
    for ((() => {
            i = 0;
        })();
        i < 128;
        i++) {
        a1?.[i];
    }
    for ((() => {
            i = 0;
        })();
        i < 64;
        i++) {
        a2?.[i];
    }
    for ((() => {
            i = 64;
        })();
        i < 128;
        i++) {
        a2?.[i];
    }
    for ((() => {
            i = 0;
        })();
        i < 64;
        i++) {
        a3?.[i];
    }
    for ((() => {
            i = 0;
        })();
        i < 128;
        i++) {
        a4?.[i];
    }
    for ((() => {
            i = 128;
        })();
        i < 256;
        i++) {
        a4?.[i];
    }
    const v361 = 256 * a209;
    let v362;
    try { v362 = new a208(ab, v361); } catch (e) {}
    var aAtTheEnd = v362;
    aAtTheEnd?.BYTES_PER_ELEMENT;
    aAtTheEnd?.length;
    aAtTheEnd?.byteLength;
    256 * a209;
    aAtTheEnd?.byteOffset;
    function f372() {
        const v374 = 257 * a209;
        try { new a208(ab, v374); } catch (e) {}
    }
    try { f372(); } catch (e) {}
    function f378() {
        const v380 = 128 * a209;
        try { new a208(ab, v380, 192); } catch (e) {}
    }
    try { f378(); } catch (e) {}
    if (a209 !== 1) {
        function f386() {
            const v390 = (128 * a209) - 1;
            try { new a208(ab, v390, 10); } catch (e) {}
        }
        try { f386(); } catch (e) {}
        const v397 = (10 * a209) + 1;
        let v398;
        try { v398 = new ArrayBuffer(v397); } catch (e) {}
        var unalignedArrayBuffer = v398;
        let v402;
        try { v402 = new a208(unalignedArrayBuffer, 0, 10); } catch (e) {}
        var goodArray = v402;
        goodArray?.length;
        10 * a209;
        goodArray?.byteLength;
        function f409() {
            try { new a208(unalignedArrayBuffer); } catch (e) {}
        }
        try { f409(); } catch (e) {}
        function f412() {
            const v414 = 5 * a209;
            try { new a208(unalignedArrayBuffer, v414); } catch (e) {}
        }
        try { f412(); } catch (e) {}
    }
    let v417;
    try { v417 = new a208(); } catch (e) {}
    var aFromUndef = v417;
    aFromUndef?.BYTES_PER_ELEMENT;
    aFromUndef?.length;
    0 * a209;
    aFromUndef?.byteLength;
    aFromUndef?.byteOffset;
    0 * a209;
    aFromUndef?.buffer?.byteLength;
    let v432;
    try { v432 = new a208(null); } catch (e) {}
    var aFromNull = v432;
    aFromNull?.BYTES_PER_ELEMENT;
    aFromNull?.length;
    0 * a209;
    aFromNull?.byteLength;
    aFromNull?.byteOffset;
    0 * a209;
    aFromNull?.buffer?.byteLength;
    let v447;
    try { v447 = new a208(true); } catch (e) {}
    var aFromBool = v447;
    aFromBool?.BYTES_PER_ELEMENT;
    aFromBool?.length;
    1 * a209;
    aFromBool?.byteLength;
    aFromBool?.byteOffset;
    1 * a209;
    aFromBool?.buffer?.byteLength;
    let v462;
    try { v462 = new a208("30"); } catch (e) {}
    var aFromString = v462;
    aFromString?.BYTES_PER_ELEMENT;
    aFromString?.length;
    30 * a209;
    aFromString?.byteLength;
    aFromString?.byteOffset;
    30 * a209;
    aFromString?.buffer?.byteLength;
    function f476() {
        let v478;
        try { v478 = Symbol(); } catch (e) {}
        try { new a208(v478); } catch (e) {}
    }
    try { f476(); } catch (e) {}
    var jsArray = [];
    for ((() => {
            i = 0;
        })();
        i < 30;
        i++) {
        try { jsArray.push(a210); } catch (e) {}
    }
    let v489;
    try { v489 = new a208(jsArray); } catch (e) {}
    var aFromArray = v489;
    aFromArray?.BYTES_PER_ELEMENT;
    aFromArray?.length;
    30 * a209;
    aFromArray?.byteLength;
    aFromArray?.byteOffset;
    30 * a209;
    aFromArray?.buffer?.byteLength;
    for ((() => {
            i = 0;
        })();
        i < 30;
        i++) {
        aFromArray?.[i];
    }
    let v509;
    try { v509 = new ArrayBuffer(0); } catch (e) {}
    var abLen0 = v509;
    let v511;
    try { v511 = new a208(abLen0); } catch (e) {}
    var aOverAbLen0 = v511;
    aOverAbLen0?.buffer;
    aOverAbLen0?.BYTES_PER_ELEMENT;
    aOverAbLen0?.length;
    aOverAbLen0?.byteLength;
    aOverAbLen0?.byteOffset;
    let v521;
    try { v521 = new a208(); } catch (e) {}
    var aNoParam = v521;
    aNoParam?.BYTES_PER_ELEMENT;
    aNoParam?.length;
    aNoParam?.byteLength;
    aNoParam?.byteOffset;
    const v531 = 64 * a209;
    let v533;
    try { v533 = new a208(ab, v531, 128); } catch (e) {}
    var a = v533;
    ("[object " + a208?.name) + "]";
    const v541 = Object?.prototype?.toString;
    try { v541.call(a); } catch (e) {}
    const v544 = a208?.prototype?.__proto__;
    const v546 = Symbol?.toStringTag;
    let v547;
    try { v547 = Object.getOwnPropertyDescriptor(v544, v546); } catch (e) {}
    var desc = v547;
    desc?.configurable;
    desc?.enumerable;
    !(!desc?.writable);
    !(!desc?.set);
    typeof desc?.get;
    function* gen1() {
        for (let i562 = 0; i562 < 10; i562++) {
            yield i562;
        }
    }
    let v570;
    try { v570 = gen(); } catch (e) {}
    let v571;
    try { v571 = new a208(v570); } catch (e) {}
    var genArr = v571;
    genArr?.length;
    genArr?.[0];
    genArr?.[9];
    const v582 = [1,2,3];
    let v583;
    try { v583 = new a208(v582); } catch (e) {}
    genArr = v583;
    genArr?.length;
    genArr?.[0];
    genArr?.[2];
    var arrayIterator = Array?.prototype?.[Symbol?.iterator];
    const t399 = Array?.prototype;
    t399[Symbol?.iterator] = gen;
    const v600 = [1,2,3];
    let v601;
    try { v601 = new a208(v600); } catch (e) {}
    genArr = v601;
    genArr?.length;
    genArr?.[0];
    genArr?.[9];
    const t405 = Array?.prototype;
    t405[Symbol?.iterator] = arrayIterator;
    var myObject = { 0: 5, 1: 6, length: 2 };
    let v615;
    try { v615 = new a208(myObject); } catch (e) {}
    genArr = v615;
    genArr?.length;
    genArr?.[0];
    genArr?.[1];
    var iteratorReadCount = 0;
    const v624 = Symbol?.iterator;
    function f625() {
        iteratorReadCount++;
        return gen;
    }
    const v627 = { get: f625 };
    try { Object.defineProperty(myObject, v624, v627); } catch (e) {}
    let v629;
    try { v629 = new a208(myObject); } catch (e) {}
    genArr = v629;
    genArr?.length;
    genArr?.[0];
    genArr?.[9];
}
try { TestTypedArray(Uint8Array, 1, 255); } catch (e) {}
const v644 = -127;
try { TestTypedArray(Int8Array, 1, v644); } catch (e) {}
try { TestTypedArray(Uint16Array, 2, 65535); } catch (e) {}
const v653 = -32767;
try { TestTypedArray(Int16Array, 2, v653); } catch (e) {}
try { TestTypedArray(Uint32Array, 4, 4294967295); } catch (e) {}
const v662 = -2147483647;
try { TestTypedArray(Int32Array, 4, v662); } catch (e) {}
try { TestTypedArray(Float32Array, 4, 0.5); } catch (e) {}
try { TestTypedArray(Float64Array, 8, 0.5); } catch (e) {}
try { TestTypedArray(Uint8ClampedArray, 1, 255); } catch (e) {}
function SubarrayTestCase(a677, a678, a679, a680, a681, a682, a683) {
    let v684;
    try { v684 = new a677(a681); } catch (e) {}
    var a = v684;
    let v686;
    try { v686 = a.subarray(a682, a683); } catch (e) {}
    var s = v686;
    s?.constructor;
    s?.length;
    if (s?.length > 0) {
        s[0] = a678;
        a?.[a680];
    }
}
function TestSubArray(a695, a696) {
    try { SubarrayTestCase(a695, a696, 512, 512, 1024, 512, 1024); } catch (e) {}
    try { SubarrayTestCase(a695, a696, 512, 512, 1024, 512); } catch (e) {}
    try { SubarrayTestCase(a695, a696, 0, undefined, 0, 1, 20); } catch (e) {}
    try { SubarrayTestCase(a695, a696, 100, 0, 100, 0, 100); } catch (e) {}
    try { SubarrayTestCase(a695, a696, 100, 0, 100, 0, 1000); } catch (e) {}
    try { SubarrayTestCase(a695, a696, 0, undefined, 100, 5, 1); } catch (e) {}
    const v736 = -11;
    const v738 = -10;
    try { SubarrayTestCase(a695, a696, 1, 89, 100, v736, v738); } catch (e) {}
    const v744 = -10;
    try { SubarrayTestCase(a695, a696, 9, 90, 100, v744, 99); } catch (e) {}
    const v751 = -10;
    try { SubarrayTestCase(a695, a696, 0, undefined, 100, v751, 80); } catch (e) {}
    const v759 = -10;
    try { SubarrayTestCase(a695, a696, 10, 80, 100, 80, v759); } catch (e) {}
    try { SubarrayTestCase(a695, a696, 10, 90, 100, 90, "100"); } catch (e) {}
    try { SubarrayTestCase(a695, a696, 10, 90, 100, "90", "100"); } catch (e) {}
    try { SubarrayTestCase(a695, a696, 0, undefined, 100, 90, "abc"); } catch (e) {}
    try { SubarrayTestCase(a695, a696, 10, 0, 100, "abc", 10); } catch (e) {}
    try { SubarrayTestCase(a695, a696, 10, 0, 100, 0.96, 10.96); } catch (e) {}
    try { SubarrayTestCase(a695, a696, 10, 0, 100, 0.96, 10.01); } catch (e) {}
    try { SubarrayTestCase(a695, a696, 10, 0, 100, 0.01, 10.01); } catch (e) {}
    try { SubarrayTestCase(a695, a696, 10, 0, 100, 0.01, 10.96); } catch (e) {}
    try { SubarrayTestCase(a695, a696, 10, 90, 100, 90); } catch (e) {}
    const v818 = -10;
    try { SubarrayTestCase(a695, a696, 10, 90, 100, v818); } catch (e) {}
    var method = a695?.prototype?.subarray;
    let v824;
    try { v824 = new a695(100); } catch (e) {}
    try { method.call(v824, 0, 100); } catch (e) {}
    var o = {};
    function f830() {
        try { method.call(o, 0, 100); } catch (e) {}
    }
    try { f830(); } catch (e) {}
}
try { TestSubArray(Uint8Array, 255); } catch (e) {}
const v839 = -127;
try { TestSubArray(Int8Array, v839); } catch (e) {}
try { TestSubArray(Uint16Array, 65535); } catch (e) {}
const v844 = -32767;
try { TestSubArray(Int16Array, v844); } catch (e) {}
try { TestSubArray(Uint32Array, 4294967295); } catch (e) {}
const v849 = -2147483647;
try { TestSubArray(Int32Array, v849); } catch (e) {}
try { TestSubArray(Float32Array, 0.5); } catch (e) {}
try { TestSubArray(Float64Array, 0.5); } catch (e) {}
try { TestSubArray(Uint8ClampedArray, 255); } catch (e) {}
function TestTypedArrayOutOfRange(a858, a859, a860) {
    let v862;
    try { v862 = new a858(1); } catch (e) {}
    var a = v862;
    a[0] = a859;
    a?.[0];
}
try { TestTypedArrayOutOfRange(Uint8Array, 506, 250); } catch (e) {}
const v869 = -1;
try { TestTypedArrayOutOfRange(Uint8Array, v869, 255); } catch (e) {}
const v875 = 122 - 128;
try { TestTypedArrayOutOfRange(Int8Array, 506, v875); } catch (e) {}
try { TestTypedArrayOutOfRange(Uint16Array, 131066, 65530); } catch (e) {}
const v881 = -1;
try { TestTypedArrayOutOfRange(Uint16Array, v881, 65535); } catch (e) {}
const v887 = 32762 - 32768;
try { TestTypedArrayOutOfRange(Int16Array, 131066, v887); } catch (e) {}
try { TestTypedArrayOutOfRange(Uint32Array, 8589934586, 4294967290); } catch (e) {}
const v893 = -1;
try { TestTypedArrayOutOfRange(Uint32Array, v893, 4294967295); } catch (e) {}
const v899 = 2147483642 - 2147483648;
try { TestTypedArrayOutOfRange(Int32Array, 8589934586, v899); } catch (e) {}
try { TestTypedArrayOutOfRange(Uint8ClampedArray, 506, 255); } catch (e) {}
const v905 = -1;
try { TestTypedArrayOutOfRange(Uint8ClampedArray, v905, 0); } catch (e) {}
var typedArrayConstructors = [Uint8Array,Int8Array,Uint16Array,Int16Array,Uint32Array,Int32Array,Uint8ClampedArray,Float32Array,Float64Array];
function TestPropertyTypeChecks(a911) {
    function CheckProperty(a913) {
        function f914() {
            'use strict';
            let v917;
            try { v917 = new a911(10); } catch (e) {}
            v917[a913] = 0;
        }
        try { f914(); } catch (e) {}
        const v920 = a911?.prototype?.__proto__;
        let v922;
        try { v922 = Object.getOwnPropertyDescriptor(v920, a913); } catch (e) {}
        var d = v922;
        var o = {};
        function f926() {
            const v927 = d?.get;
            try { v927.call(o); } catch (e) {}
        }
        try { f926(); } catch (e) {}
        for (let i932 = 0; i932 < typedArrayConstructors?.length; i932++) {
            var ctor = typedArrayConstructors?.[i932];
            let v941;
            try { v941 = new ctor(10); } catch (e) {}
            var a = v941;
            const v943 = d?.get;
            try { v943.call(a); } catch (e) {}
        }
    }
    try { CheckProperty("buffer"); } catch (e) {}
    try { CheckProperty("byteOffset"); } catch (e) {}
    try { CheckProperty("byteLength"); } catch (e) {}
    try { CheckProperty("length"); } catch (e) {}
}
for (i = 0; i < typedArrayConstructors?.length; i++) {
    const v961 = typedArrayConstructors?.[i];
    try { TestPropertyTypeChecks(v961); } catch (e) {}
}
function TestTypedArraySet() {
    function assertArrayPrefix(a965, a966) {
        for (let i968 = 0; i968 < a965?.length; ++i968) {
            a965?.[i968];
            a966?.[i968];
        }
    }
    const v983 = [1,2,3,4,0,-1];
    let v984;
    try { v984 = new Int16Array(v983); } catch (e) {}
    var a11 = v984;
    let v987;
    try { v987 = new Uint16Array(15); } catch (e) {}
    var a12 = v987;
    try { a12.set(a11, 3); } catch (e) {}
    [0,0,0,1,2,3,4,0,65535,0,0];
    function f1003() {
        try { a11.set(a12); } catch (e) {}
    }
    try { f1003(); } catch (e) {}
    const v1012 = -1;
    function f1013() {
        return 3;
    }
    var a21 = [1,,10,NaN,0,v1012,{ valueOf: f1013 }];
    let v1019;
    try { v1019 = new Int32Array(12); } catch (e) {}
    var a22 = v1019;
    try { a22.set(a21, 2); } catch (e) {}
    [0,0,1,0,10,0,0,-1,3,0];
    const v1045 = [2,4,6,8,11,NaN,1 / 0,-3];
    let v1046;
    try { v1046 = new Float32Array(v1045); } catch (e) {}
    var a31 = v1046;
    let v1050;
    try { v1050 = a31.subarray(2, 6); } catch (e) {}
    var a32 = v1050;
    try { a31.set(a32, 4); } catch (e) {}
    [2,4,6,8,6,8,11,NaN];
    [6,8,6,8];
    const v1071 = [3,2,5,6];
    let v1072;
    try { v1072 = new Uint8ClampedArray(v1071); } catch (e) {}
    var a4 = v1072;
    try { a4.set(a4); } catch (e) {}
    [3,2,5,6];
    let v1082;
    try { v1082 = new ArrayBuffer(4); } catch (e) {}
    var b = v1082;
    let v1084;
    try { v1084 = new Int16Array(b); } catch (e) {}
    var a5 = v1084;
    let v1086;
    try { v1086 = new Int8Array(b); } catch (e) {}
    var a50 = v1086;
    let v1090;
    try { v1090 = new Int8Array(b, 0, 2); } catch (e) {}
    var a51 = v1090;
    let v1094;
    try { v1094 = new Int8Array(b, 1, 2); } catch (e) {}
    var a52 = v1094;
    let v1098;
    try { v1098 = new Int8Array(b, 2, 2); } catch (e) {}
    var a53 = v1098;
    const v1102 = [20560,2570];
    try { a5.set(v1102); } catch (e) {}
    [80,80,10,10];
    [80,80];
    [80,10];
    [10,10];
    const v1122 = [80,80,10,10];
    try { a50.set(v1122); } catch (e) {}
    try { a51.set(a5); } catch (e) {}
    [80,10,10,10];
    const v1134 = [80,80,10,10];
    try { a50.set(v1134); } catch (e) {}
    try { a52.set(a5); } catch (e) {}
    [80,80,10,10];
    const v1146 = [80,80,10,10];
    try { a50.set(v1146); } catch (e) {}
    try { a53.set(a5); } catch (e) {}
    [80,80,80,10];
    const v1158 = [80,81,10,11];
    try { a50.set(v1158); } catch (e) {}
    try { a5.set(a51); } catch (e) {}
    [80,81];
    const v1168 = [80,81,10,11];
    try { a50.set(v1168); } catch (e) {}
    try { a5.set(a52); } catch (e) {}
    [81,10];
    const v1178 = [80,81,10,11];
    try { a50.set(v1178); } catch (e) {}
    try { a5.set(a53); } catch (e) {}
    [10,11];
    const v1186 = [1.2,12.3];
    let v1187;
    try { v1187 = new Float32Array(v1186); } catch (e) {}
    var a61 = v1187;
    let v1190;
    try { v1190 = new Int32Array(2); } catch (e) {}
    var a62 = v1190;
    try { a62.set(a61); } catch (e) {}
    [1,12];
    try { a61.set(a62); } catch (e) {}
    [1,12];
    let v1201;
    try { v1201 = new Uint16Array(50); } catch (e) {}
    var a = v1201;
    var expected = [];
    for (i = 0; i < 50; i++) {
        a[i] = i;
        try { expected.push(i); } catch (e) {}
    }
    const v1214 = {};
    try { a.set(v1214); } catch (e) {}
    function f1216() {
        const v1217 = {};
        const v1218 = a?.set;
        try { v1218.call(v1217); } catch (e) {}
    }
    try { f1216(); } catch (e) {}
    function f1222() {
        const v1223 = [];
        const v1224 = a?.set;
        try { v1224.call(v1223); } catch (e) {}
    }
    try { f1222(); } catch (e) {}
    function f1227() {
        try { a.set(0); } catch (e) {}
    }
    try { f1227(); } catch (e) {}
    function f1231() {
        try { a.set(0, 1); } catch (e) {}
    }
    try { f1231(); } catch (e) {}
    a?.set?.length;
}
try { TestTypedArraySet(); } catch (e) {}
function TestTypedArraysWithIllegalIndices() {
    let v1242;
    try { v1242 = new Int32Array(100); } catch (e) {}
    var a = v1242;
    a[-10] = 10;
    a?.[-10];
    a["-10"] = 10;
    a?.["-10"];
    var s = "    -10";
    a[s] = 10;
    a?.[s];
    var s1 = "    -10   ";
    a[s] = 10;
    a?.[s];
    a["-1e2"] = 10;
    a?.["-1e2"];
    a?.[-100];
    a["-0"] = 256;
    var s2 = "     -0";
    a[s2] = 255;
    a?.["-0"];
    a?.[s2];
    a?.[-0];
    a[-Infinity] = 50;
    a?.[-Infinity];
    a[1.5] = 10;
    a?.[1.5];
    const v1301 = -1;
    let v1303;
    try { v1303 = Math.sqrt(v1301); } catch (e) {}
    var nan = v1303;
    a[nan] = 5;
    a?.[nan];
    var x = 0;
    var y = -0;
    1 / x;
    -Infinity;
    1 / y;
    a[x] = 5;
    a[y] = 27;
    a?.[x];
    a?.[y];
}
try { TestTypedArraysWithIllegalIndices(); } catch (e) {}
function TestTypedArraysWithIllegalIndicesStrict() {
    'use strict';
    let v1327;
    try { v1327 = new Int32Array(100); } catch (e) {}
    var a = v1327;
    a[-10] = 10;
    a?.[-10];
    a["-10"] = 10;
    a?.["-10"];
    var s = "    -10";
    a[s] = 10;
    a?.[s];
    var s1 = "    -10   ";
    a[s] = 10;
    a?.[s];
    a["-1e2"] = 10;
    a?.["-1e2"];
    a?.[-100];
    a["-0"] = 256;
    var s2 = "     -0";
    a[s2] = 255;
    a?.["-0"];
    a?.[s2];
    a?.[-0];
    a[1.5] = 10;
    a?.[1.5];
    const v1380 = -1;
    let v1382;
    try { v1382 = Math.sqrt(v1380); } catch (e) {}
    var nan = v1382;
    a[nan] = 5;
    a?.[nan];
    var x = 0;
    var y = -0;
    1 / x;
    -Infinity;
    1 / y;
    a[x] = 5;
    a[y] = 27;
    a?.[x];
    a?.[y];
}
try { TestTypedArraysWithIllegalIndicesStrict(); } catch (e) {}
function TestDataViewConstructor() {
    let v1408;
    try { v1408 = new ArrayBuffer(256); } catch (e) {}
    var ab = v1408;
    let v1413;
    try { v1413 = new DataView(ab, 1, 255); } catch (e) {}
    var d1 = v1413;
    try { ArrayBuffer.isView(d1); } catch (e) {}
    d1?.buffer;
    d1?.byteOffset;
    d1?.byteLength;
    let v1422;
    try { v1422 = new DataView(ab, 2); } catch (e) {}
    var d2 = v1422;
    d2?.buffer;
    d2?.byteOffset;
    d2?.byteLength;
    let v1429;
    try { v1429 = new DataView(ab); } catch (e) {}
    var d3 = v1429;
    d3?.buffer;
    d3?.byteOffset;
    d3?.byteLength;
    let v1438;
    try { v1438 = new DataView(ab, 1, 0); } catch (e) {}
    var d3a = v1438;
    d3a?.buffer;
    d3a?.byteOffset;
    d3a?.byteLength;
    let v1447;
    try { v1447 = new DataView(ab, 256, 0); } catch (e) {}
    var d3b = v1447;
    d3b?.buffer;
    d3b?.byteOffset;
    d3b?.byteLength;
    let v1455;
    try { v1455 = new DataView(ab, 256); } catch (e) {}
    var d3c = v1455;
    d3c?.buffer;
    d3c?.byteOffset;
    d3c?.byteLength;
    let v1464;
    try { v1464 = new DataView(ab, 1, 3.1415926); } catch (e) {}
    var d4 = v1464;
    d4?.buffer;
    d4?.byteOffset;
    d4?.byteLength;
    function f1471() {
        const v1473 = -1;
        try { new DataView(ab, v1473); } catch (e) {}
    }
    try { f1471(); } catch (e) {}
    function f1477() {
        try { new DataView(); } catch (e) {}
    }
    try { f1477(); } catch (e) {}
    function f1481() {
        const v1482 = [];
        try { new DataView(v1482); } catch (e) {}
    }
    try { f1481(); } catch (e) {}
    function f1485() {
        try { new DataView(ab, 257); } catch (e) {}
    }
    try { f1485(); } catch (e) {}
    function f1489() {
        try { new DataView(ab, 1, 1024); } catch (e) {}
    }
    try { f1489(); } catch (e) {}
}
try { TestDataViewConstructor(); } catch (e) {}
function TestDataViewPropertyTypeChecks() {
    let v1499;
    try { v1499 = new ArrayBuffer(10); } catch (e) {}
    let v1500;
    try { v1500 = new DataView(v1499); } catch (e) {}
    var a = v1500;
    function CheckProperty(a1503) {
        const v1504 = DataView?.prototype;
        let v1506;
        try { v1506 = Object.getOwnPropertyDescriptor(v1504, a1503); } catch (e) {}
        var d = v1506;
        var o = {};
        function f1510() {
            const v1511 = d?.get;
            try { v1511.call(o); } catch (e) {}
        }
        try { f1510(); } catch (e) {}
        const v1515 = d?.get;
        try { v1515.call(a); } catch (e) {}
    }
    try { CheckProperty("buffer"); } catch (e) {}
    try { CheckProperty("byteOffset"); } catch (e) {}
    try { CheckProperty("byteLength"); } catch (e) {}
    function CheckGetSetLength(a1524) {
        DataView?.prototype?.["get" + a1524]?.length;
        DataView?.prototype?.["set" + a1524]?.length;
    }
    try { CheckGetSetLength("Int8"); } catch (e) {}
    try { CheckGetSetLength("Uint8"); } catch (e) {}
    try { CheckGetSetLength("Int16"); } catch (e) {}
    try { CheckGetSetLength("Uint16"); } catch (e) {}
    try { CheckGetSetLength("Int32"); } catch (e) {}
    try { CheckGetSetLength("Uint32"); } catch (e) {}
    try { CheckGetSetLength("Float32"); } catch (e) {}
    try { CheckGetSetLength("Float64"); } catch (e) {}
}
try { TestDataViewPropertyTypeChecks(); } catch (e) {}
function TestDataViewToStringTag() {
    let v1558;
    try { v1558 = new ArrayBuffer(10); } catch (e) {}
    let v1559;
    try { v1559 = new DataView(v1558); } catch (e) {}
    var a = v1559;
    const v1564 = Object?.prototype?.toString;
    try { v1564.call(a); } catch (e) {}
    const v1566 = DataView?.prototype;
    const v1568 = Symbol?.toStringTag;
    let v1569;
    try { v1569 = Object.getOwnPropertyDescriptor(v1566, v1568); } catch (e) {}
    var desc = v1569;
    desc?.configurable;
    desc?.enumerable;
    desc?.writable;
    desc?.value;
}
function TestEnumerable(a1577, a1578) {
    function props(a1580) {
        var array = [];
        for (const v1583 in a1580) {
            try { array.push(v1583); } catch (e) {}
        }
        let v1585;
        try { v1585 = array.sort(); } catch (e) {}
        return v1585;
    }
    [];
    try { props(a1577); } catch (e) {}
    [];
    const v1589 = a1577?.prototype;
    try { props(v1589); } catch (e) {}
    if (a1578) {
        [];
        try { props(a1578); } catch (e) {}
    }
}
let v1594;
try { v1594 = new ArrayBuffer(); } catch (e) {}
try { TestEnumerable(ArrayBuffer, v1594); } catch (e) {}
for (i = 0; i < typedArrayConstructors?.length; i++) {
    const v1604 = typedArrayConstructors?.[i];
    try { TestEnumerable(v1604); } catch (e) {}
}
let v1607;
try { v1607 = new ArrayBuffer(); } catch (e) {}
let v1608;
try { v1608 = new DataView(v1607); } catch (e) {}
try { TestEnumerable(DataView, v1608); } catch (e) {}
function TestArbitrary(a1611) {
    function TestProperty(a1613, a1614, a1615) {
        a1613[a1614] = a1615;
        a1613?.[a1614];
    }
    for (let i1618 = 0; i1618 < 20; i1618++) {
        const v1625 = "key" + i1618;
        const v1627 = "val" + i1618;
        try { TestProperty(a1611, v1625, v1627); } catch (e) {}
        const v1630 = "foo" + i1618;
        const v1632 = "bar" + i1618;
        try { TestProperty(a1611, v1630, v1632); } catch (e) {}
    }
}
let v1635;
try { v1635 = new ArrayBuffer(256); } catch (e) {}
try { TestArbitrary(v1635); } catch (e) {}
for (i = 0; i < typedArrayConstructors?.length; i++) {
    const v1645 = typedArrayConstructors?.[i];
    let v1647;
    try { v1647 = new v1645(10); } catch (e) {}
    try { TestArbitrary(v1647); } catch (e) {}
}
let v1650;
try { v1650 = new ArrayBuffer(256); } catch (e) {}
let v1651;
try { v1651 = new DataView(v1650); } catch (e) {}
try { TestArbitrary(v1651); } catch (e) {}
function f1653() {
    try { ArrayBuffer(); } catch (e) {}
}
try { f1653(); } catch (e) {}
function f1657() {
    let v1658;
    try { v1658 = new ArrayBuffer(); } catch (e) {}
    try { DataView(v1658); } catch (e) {}
}
try { f1657(); } catch (e) {}
function TestNonConfigurableProperties(a1662) {
    const v1664 = [100];
    let v1665;
    try { v1665 = new a1662(v1664); } catch (e) {}
    var arr = v1665;
    let v1669;
    try { v1669 = Object.getOwnPropertyDescriptor(arr, "0"); } catch (e) {}
    v1669?.configurable;
    delete arr?.[0];
}
for (i = 0; i < typedArrayConstructors?.length; i++) {
    const v1681 = typedArrayConstructors?.[i];
    try { TestNonConfigurableProperties(v1681); } catch (e) {}
}
