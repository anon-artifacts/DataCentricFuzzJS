function f0() {
}
var BUGNUMBER = 310425;
var summary = "Array.indexOf/lastIndexOf edge cases";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
expect = -1;
const v15 = -1;
actual = ([]).lastIndexOf(undefined, v15);
f0(expect, actual, summary);
expect = -1;
const v23 = -1;
actual = ([]).indexOf(undefined, v23);
f0(expect, actual, summary);
var x = [];
x[1 << 30] = 1;
expect = 1 << 30;
actual = x.lastIndexOf(1);
f0(expect, actual, summary);
