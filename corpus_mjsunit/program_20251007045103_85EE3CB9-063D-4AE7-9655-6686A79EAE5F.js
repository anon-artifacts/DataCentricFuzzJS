console.log("Test the basic behaviors of global isNaN()");
var globalObject = eval("this");
globalObject.hasOwnProperty("isNaN");
typeof isNaN;
isNaN.length;
isNaN.name;
Object.getOwnPropertyDescriptor(globalObject, "isNaN").configurable;
Object.getOwnPropertyDescriptor(globalObject, "isNaN").enumerable;
Object.getOwnPropertyDescriptor(globalObject, "isNaN").writable;
isNaN();
isNaN(NaN);
isNaN(undefined);
isNaN(0);
isNaN(-0);
isNaN(1);
isNaN(-1);
isNaN(42);
isNaN(123.5);
isNaN(-123.5);
isNaN(Number.MAX_VALUE);
isNaN(Number.MIN_VALUE);
isNaN(Number.MAX_SAFE_INTEGER);
isNaN(Number.MIN_SAFE_INTEGER);
isNaN(Math.PI);
isNaN(Math.E);
isNaN(Infinity);
isNaN(-Infinity);
isNaN(null);
isNaN({});
isNaN({ webkit: "awesome" });
isNaN([]);
isNaN([123]);
isNaN([1,1]);
isNaN([NaN]);
isNaN("");
isNaN("1");
isNaN("x");
isNaN("NaN");
isNaN("Infinity");
isNaN(true);
isNaN(false);
function f96() {
}
isNaN(f96);
isNaN(isNaN);
try {
    isNaN(Symbol());
} catch(e102) {
}
function f103() {
    return "42";
}
var objectConvertToString = { toString: f103 };
isNaN(objectConvertToString);
function f109() {
    this.toStringCallCount += 1;
    return "42";
}
var objectRecordToStringCall = { toStringCallCount: 0, toString: f109 };
isNaN(objectRecordToStringCall);
objectRecordToStringCall.toStringCallCount;
function f117() {
    throw "No!";
}
var objectThrowOnToString = { toString: f117 };
try {
    isNaN(objectThrowOnToString);
} catch(e122) {
}
function f123() {
    return 1.1;
}
var objectWithValueOf = { valueOf: f123 };
isNaN(objectWithValueOf);
function f128() {
    throw "Nope!";
}
function f130() {
    return 5;
}
var objectThrowOnValueOf = { valueOf: f128, toString: f130 };
try {
    isNaN(objectThrowOnValueOf);
} catch(e135) {
}
function f137() {
    let v139 = this.valueOfCallCount;
    ++v139;
    return NaN;
}
var objectRecordValueOfCall = { valueOfCallCount: 0, valueOf: f137 };
isNaN(objectRecordValueOfCall);
objectRecordValueOfCall.valueOfCallCount;
const v145 = [];
function f146() {
    this.callList.push("toString");
    return "Bad";
}
function f152() {
    this.callList.push("valueOf");
    return 12345;
}
var objectRecordConversionCalls = { callList: v145, toString: f146, valueOf: f152 };
isNaN(objectRecordConversionCalls);
objectRecordConversionCalls.callList.toString();
