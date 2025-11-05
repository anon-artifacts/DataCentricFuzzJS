function f0() {
}
var BUGNUMBER = 165201;
var summary = "";
var actual = "";
var expect = "";
summary = "RegExp.prototype.toSource should not affect RegExp.prototype.toString";
f0(BUGNUMBER);
f0(summary);
function f() {
    return /abc/;
}
function f14() {
    return "Hi there";
}
const t15 = RegExp.prototype;
t15.toSource = f14;
expect = -1;
actual = f.toString().indexOf("Hi there");
f0(expect, actual, summary);
summary = "Array.prototype.toSource should not affect Array.prototype.toString";
f0(BUGNUMBER);
f0(summary);
function g() {
    return [1,2,3];
}
function f32() {
    return "Hi there";
}
const t29 = Array.prototype;
t29.toSource = f32;
expect = -1;
actual = g.toString().indexOf("Hi there");
f0(expect, actual, summary);
