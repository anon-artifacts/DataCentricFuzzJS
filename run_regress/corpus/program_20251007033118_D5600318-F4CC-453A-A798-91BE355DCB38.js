function f0() {
}
var BUGNUMBER = 366292;
var summary = "__defineSetter__ and JSPROP_SHARED regression";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
expect = "undefined";
function f13() {
}
this.__defineSetter__("x", f13);
f0(expect, actual = String(x), summary);
