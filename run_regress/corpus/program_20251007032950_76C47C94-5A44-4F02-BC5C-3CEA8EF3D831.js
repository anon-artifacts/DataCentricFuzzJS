console.log("Test the basic behaviors of Math.clz32()");
Math.hasOwnProperty("clz32");
typeof Math.clz32;
Object.getPrototypeOf(Math).clz32;
Math.clz32.length;
Math.clz32.name;
Object.getOwnPropertyDescriptor(Math, "clz32").configurable;
Object.getOwnPropertyDescriptor(Math, "clz32").enumerable;
Object.getOwnPropertyDescriptor(Math, "clz32").writable;
Math.clz32(0);
Math.clz32(-0);
Math.clz32(1);
Math.clz32(-1);
Math.clz32(42);
Math.clz32(-2147483648);
Math.clz32(2147483647);
Math.clz32(Number.MAX_VALUE);
Math.clz32(Number.MIN_VALUE);
Math.clz32(Number.MAX_SAFE_INTEGER);
Math.clz32(Number.MIN_SAFE_INTEGER);
Math.clz32(Math.PI);
Math.clz32(Math.E);
Math.clz32(NaN);
Math.clz32(Number.POSITIVE_INFINITY);
Math.clz32(Number.NEGATIVE_INFINITY);
Math.clz32();
Math.clz32(undefined);
Math.clz32(null);
Math.clz32("WebKit");
try {
    Math.clz32(Symbol("WebKit"));
} catch(e71) {
}
Math.clz32({ webkit: "awesome" });
function f75() {
    return "66";
}
var objectConvertToString = { toString: f75 };
Math.clz32(objectConvertToString);
function f81() {
    this.toStringCallCount += 1;
    return "9";
}
var objectRecordToStringCall = { toStringCallCount: 0, toString: f81 };
Math.clz32(objectRecordToStringCall);
objectRecordToStringCall.toStringCallCount;
function f89() {
    throw "No!";
}
var objectThrowOnToString = { toString: f89 };
try {
    Math.clz32(objectThrowOnToString);
} catch(e94) {
}
function f95() {
    return 95014;
}
var objectWithValueOf = { valueOf: f95 };
Math.clz32(objectWithValueOf);
function f100() {
    throw "Nope!";
}
function f102() {
    return 5;
}
var objectThrowOnValueOf = { valueOf: f100, toString: f102 };
try {
    Math.clz32(objectThrowOnValueOf);
} catch(e107) {
}
function f109() {
    let v111 = this.valueOfCallCount;
    ++v111;
    return 436;
}
var objectRecordValueOfCall = { valueOfCallCount: 0, valueOf: f109 };
Math.clz32(objectRecordValueOfCall);
objectRecordValueOfCall.valueOfCallCount;
const v118 = [];
function f119() {
    this.callList.push("toString");
    return "Uh?";
}
function f125() {
    this.callList.push("valueOf");
    return 87665;
}
var objectRecordConversionCalls = { callList: v118, toString: f119, valueOf: f125 };
Math.clz32(objectRecordConversionCalls);
objectRecordConversionCalls.callList.toString();
