function assertProperError(a1) {
    if (!(a1 instanceof TypeError) || (a1.message.indexOf("Receiver should be a typed array view but was not an object") === -1)) {
    }
}
var tArray;
function testIntTypedArray(a16) {
    const v21 = new a16([0,2,3]);
    tArray = v21;
    tArray.includes(2);
    !tArray.includes(4);
    !tArray.includes(3, 3);
    tArray.includes(3, -1);
    const v36 = () => {
        return -1;
    };
    tArray.includes(3, { valueOf: v36 });
    tArray.includes(2);
    !tArray.includes(2.5);
    !tArray.includes("abc");
    !tArray.includes(null);
    !tArray.includes(undefined);
    !tArray.includes({ 1: "" });
    !tArray.includes("");
    try {
        const v66 = new a16([0,1,2]);
        tArray = v66;
        tArray.includes.call(null, 2);
    } catch(e71) {
    }
    try {
        const v76 = new a16([0,1,2]);
        tArray = v76;
        tArray.includes.call(undefined, 2);
    } catch(e81) {
    }
}
testIntTypedArray(Uint8Array);
testIntTypedArray(Int8Array);
testIntTypedArray(Uint8ClampedArray);
testIntTypedArray(Uint16Array);
testIntTypedArray(Int16Array);
testIntTypedArray(Uint32Array);
testIntTypedArray(Int32Array);
var fArray;
function testFloatTypedArray(a99) {
    const v104 = new a99([1,2,3]);
    fArray = v104;
    fArray.includes(2);
    !fArray.includes(4);
    !fArray.includes(3, 3);
    fArray.includes(3, -1);
    const v120 = new a99([NaN]);
    fArray = v120;
    !fArray.includes("abc");
    !fArray.includes(null);
    !fArray.includes(undefined);
    !fArray.includes({ 1: "" });
    !fArray.includes("");
    try {
        const v141 = new a99([0,1,2]);
        fArray = v141;
        fArray.includes.call(null, 2);
    } catch(e146) {
    }
    try {
        const v151 = new a99([0,1,2]);
        fArray = v151;
        fArray.includes.call(undefined, 2);
    } catch(e156) {
    }
}
const v159 = new Uint8Array([NaN]);
!v159.includes(NaN);
const v164 = new Float32Array([NaN]);
v164.includes(NaN);
const v168 = new Float64Array([NaN]);
v168.includes(NaN);
var descriptor;
var gTypedArray;
function testDescriptor(a175) {
    gTypedArray = a175;
    (descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(a175.prototype), "includes")).configurable;
    descriptor.writable;
    !descriptor.enumerable;
    descriptor.get === undefined;
    descriptor.set === undefined;
    Object.getPrototypeOf(gTypedArray.prototype).includes.name === "includes";
    Object.getPrototypeOf(gTypedArray.prototype).includes.length === 1;
}
testDescriptor(Uint8Array);
testDescriptor(Int8Array);
testDescriptor(Uint8ClampedArray);
testDescriptor(Uint16Array);
testDescriptor(Int16Array);
testDescriptor(Uint32Array);
testDescriptor(Int32Array);
testDescriptor(Float32Array);
testDescriptor(Float64Array);
const v215 = new Uint8Array([0,254]);
var arr = v215;
arr.includes(0);
arr.includes(254);
!arr.includes(255);
!arr.includes(-1);
const v232 = new Int8Array([-128,127]);
arr = v232;
arr.includes(-128);
arr.includes(127);
!arr.includes(128);
!arr.includes(-129);
const v249 = new Uint8ClampedArray([-128,256]);
arr = v249;
arr.includes(255);
arr.includes(0);
!arr.includes(-128);
!arr.includes(-256);
const v265 = new Uint16Array([0,65535]);
arr = v265;
arr.includes(0);
arr.includes(65535);
!arr.includes(65536);
!arr.includes(-1);
const v281 = new Int16Array([-32768,32767]);
arr = v281;
arr.includes(-32768);
arr.includes(32767);
!arr.includes(32768);
!arr.includes(-32769);
const v297 = new Uint32Array([0,4294967295]);
arr = v297;
arr.includes(0);
arr.includes(4294967295);
!arr.includes(4294967296);
!arr.includes(-1);
const v313 = new Int32Array([-2147483648,2147483647]);
arr = v313;
arr.includes(-2147483648);
arr.includes(2147483647);
!arr.includes(2147483648);
!arr.includes(-2147483649);
const v330 = new Float32Array([-3.402820018375656e+38,3.402820018375656e+38]);
arr = v330;
arr.includes(-3.402820018375656e+38);
arr.includes(3.402820018375656e+38);
!arr.includes(3.50282e+38);
!arr.includes(-3.50282e+38);
const v347 = new Float64Array([-1.79769e+308,1.79769e+308]);
arr = v347;
arr.includes(-1.79769e+308);
arr.includes(1.79769e+308);
!arr.includes(-Infinity);
!arr.includes(Infinity);
function testInfinity(a361) {
    const v364 = new a361([Infinity]);
    arr = v364;
    arr.includes(Infinity);
    !arr.includes(-Infinity);
    !arr.includes(NaN);
    const v373 = new a361([-Infinity]);
    arr = v373;
    arr.includes(-Infinity);
    !arr.includes(Infinity);
    !arr.includes(NaN);
}
testInfinity(Float32Array);
testInfinity(Float64Array);
const v385 = new Float32Array([2.40282e+38]);
!v385.includes(2.40282e+38);
var funcCallCount;
function checkingValueOfCall(a391) {
    const v396 = new a391([0,1,2]);
    tArray = v396;
    function f398() {
        let v400 = this.callCount;
        v400++;
        return 0;
    }
    tArray.includes(0, funcCallCount = { callCount: 0, valueOf: f398 });
    funcCallCount.callCount === 1;
    tArray.includes("abc", funcCallCount);
    funcCallCount.callCount === 2;
    tArray.includes(null, funcCallCount);
    funcCallCount.callCount === 3;
    tArray.includes(undefined, funcCallCount);
    funcCallCount.callCount === 4;
    tArray.includes({ 1: "" }, funcCallCount);
    funcCallCount.callCount === 5;
    tArray.includes("", funcCallCount);
    funcCallCount.callCount === 6;
}
checkingValueOfCall(Uint8Array);
checkingValueOfCall(Int8Array);
checkingValueOfCall(Uint8ClampedArray);
checkingValueOfCall(Uint16Array);
checkingValueOfCall(Int16Array);
checkingValueOfCall(Uint32Array);
checkingValueOfCall(Int32Array);
checkingValueOfCall(Float32Array);
checkingValueOfCall(Float64Array);
