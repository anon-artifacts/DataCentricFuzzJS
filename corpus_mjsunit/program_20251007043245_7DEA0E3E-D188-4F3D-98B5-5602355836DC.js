function f0() {
}
var BUGNUMBER = 315509;
var summary = "Array.prototype.unshift do not crash on Arrays with holes";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
function x1() {
    const v14 = new Array(1);
    var a = v14;
    a.unshift(1);
}
function x2() {
    const v21 = new Array(1);
    var a = v21;
    a.unshift.call(a, 1);
}
function x3() {
    const v29 = new Array(1);
    var a = v29;
    a.x = a.unshift;
    a.x(1);
}
function x4() {
    const v37 = new Array(1);
    var a = v37;
    a.__defineSetter__("x", a.unshift);
    a.x = 1;
}
for (let i44 = 0; i44 < 10; i44++) {
    x1();
    x2();
    x3();
    x4();
}
f0(expect, actual, summary);
