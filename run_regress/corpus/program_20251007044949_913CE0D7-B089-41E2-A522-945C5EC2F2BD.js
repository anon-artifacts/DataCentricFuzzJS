function f0() {
}
var BUGNUMBER = 311515;
var summary = "Array.sort should skip holes and undefined during sort";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
var a = [,1,,2,,];
actual = a.sort().toString();
f0(expect = "1,2,,,", actual, summary);
