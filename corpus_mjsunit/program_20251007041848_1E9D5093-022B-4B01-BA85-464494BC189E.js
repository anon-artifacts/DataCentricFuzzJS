function f0() {
    return "xyz";
}
var a = { toString: f0 };
function f4() {
    return 42;
}
var b = { valueOf: f4 };
function f8() {
    return "x";
}
function f10() {
    return 123;
}
var c = { toString: f8, valueOf: f10 };
function f14(a15) {
    return a15;
}
const v17 = Symbol.toPrimitive;
var d = { [v17]: f14 };
const v22 = new Date(0);
var e = v22;
