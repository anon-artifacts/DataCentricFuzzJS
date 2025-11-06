function f0() {
}
var BUGNUMBER = 116228;
var summary = "Do not crash - JSOP_THIS should null obj register";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
var obj = {};
function f13() {
    return this();
}
obj.toString = f13;
try {
    obj.toString();
} catch(e17) {
}
f0(expect, actual, summary);
