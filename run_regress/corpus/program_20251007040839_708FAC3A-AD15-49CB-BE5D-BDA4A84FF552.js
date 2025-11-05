function f0() {
}
var BUGNUMBER = 178389;
var summary = "Function.prototype.toSource should not override Function.prototype.toString";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
function f() {
    function f12() {
    }
    var g = f12;
}
expect = f.toString();
function f15() {
    return "";
}
const t17 = Function.prototype;
t17.toSource = f15;
f0(expect, actual = f.toString(), summary);
