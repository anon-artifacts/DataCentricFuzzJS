console.log("Test the basic behaviors of Number.isNaN()");
Number.hasOwnProperty("isNaN");
typeof Number.isNaN;
Number.isNaN !== isNaN;
Number.isNaN.length;
Number.isNaN.name;
Object.getOwnPropertyDescriptor(Number, "isNaN").configurable;
Object.getOwnPropertyDescriptor(Number, "isNaN").enumerable;
Object.getOwnPropertyDescriptor(Number, "isNaN").writable;
Number.isNaN();
Number.isNaN(NaN);
Number.isNaN(undefined);
Number.isNaN(0);
Number.isNaN(-0);
Number.isNaN(1);
Number.isNaN(-1);
Number.isNaN(42);
Number.isNaN(123.5);
Number.isNaN(-123.5);
Number.isNaN(Number.MAX_VALUE);
Number.isNaN(Number.MIN_VALUE);
Number.isNaN(Number.MAX_SAFE_INTEGER);
Number.isNaN(Number.MIN_SAFE_INTEGER);
Number.isNaN(Math.PI);
Number.isNaN(Math.E);
Number.isNaN(Infinity);
Number.isNaN(-Infinity);
Number.isNaN(null);
Number.isNaN({});
Number.isNaN({ webkit: "awesome" });
Number.isNaN([]);
Number.isNaN([123]);
Number.isNaN([1,1]);
Number.isNaN([NaN]);
Number.isNaN("");
Number.isNaN("1");
Number.isNaN("x");
Number.isNaN("NaN");
Number.isNaN("Infinity");
Number.isNaN(true);
Number.isNaN(false);
function f96() {
}
Number.isNaN(f96);
Number.isNaN(isNaN);
Number.isNaN(Symbol());
function f102() {
    return 123;
}
var objectWithNumberValueOf = { valueOf: f102 };
function f106() {
    return NaN;
}
var objectWithNaNValueOf = { valueOf: f106 };
Number.isNaN(objectWithNumberValueOf);
Number.isNaN(objectWithNaNValueOf);
const v111 = [];
function f112() {
    this.callList.push("toString");
    return "Bad";
}
function f118() {
    this.callList.push("valueOf");
    return 12345;
}
var objectRecordConversionCalls = { callList: v111, toString: f112, valueOf: f118 };
Number.isNaN(objectRecordConversionCalls);
objectRecordConversionCalls.callList.length;
