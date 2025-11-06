function f0() {
}
var BUGNUMBER = 334807;
var summary = "12.14 - exception prototype is the original Object prototype.";
var actual = "No Error";
var expect = "ReferenceError";
f0(BUGNUMBER);
f0(summary);
f0("set Error = Number");
Error = Number;
try {
    x.y;
} catch(e17) {
    try {
        actual = e17.name;
        f0(e17 + ": x.y");
        e17.valueOf();
    } catch(e23) {
        f0(e23 + ": ex.valueOf()");
        actual = e23.name;
    }
}
f0(expect, actual, summary);
