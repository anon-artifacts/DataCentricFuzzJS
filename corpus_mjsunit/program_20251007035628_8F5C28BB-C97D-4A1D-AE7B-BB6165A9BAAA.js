function f0() {
}
var BUGNUMBER = 310295;
var summary = "Do not crash on JS_ValueToString";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
var tmp = 2.3948730458647525e+49;
const v14 = new Number(tmp);
tmp = v14;
tmp = tmp.valueOf();
tmp = String(tmp);
f0(expect, actual, summary);
