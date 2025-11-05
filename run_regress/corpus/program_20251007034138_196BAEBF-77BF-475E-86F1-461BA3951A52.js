function f0() {
}
var BUGNUMBER = 112626;
var summary = "Do not crash String.split(regexp) when regexp contains parens";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
var _cs = "2001-01-01";
var curTime = _cs.split(/([- :])/);
f0(expect, actual, summary);
