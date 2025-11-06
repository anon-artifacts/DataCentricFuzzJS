function f0() {
}
var BUGNUMBER = 330951;
var summary = "Crash in Array.sort on array with undefined value";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
([,1]).sort();
f0(expect, actual, summary);
