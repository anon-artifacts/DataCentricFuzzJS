function f0() {
}
var BUGNUMBER = 188211;
var summary = "Date.prototype.toLocaleString() error on future dates";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
var dt;
const v15 = new Date(2080000000000);
dt = v15;
f0(dt + "");
expect = true;
actual = dt.toLocaleString().indexOf("2035") >= 0;
f0(expect, actual, summary + ": new Date(208e10)");
const v29 = new Date(2090000000000);
dt = v29;
f0(dt + "");
expect = true;
actual = dt.toLocaleString().indexOf("2036") >= 0;
f0(expect, actual, summary + ": new Date(209e10)");
