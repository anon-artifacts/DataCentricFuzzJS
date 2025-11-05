function f0() {
}
var BUGNUMBER = 309925;
var summary = "Correctly parse Date strings with HH:MM";
const v7 = new Date("Sep 24, 11:58 105");
var actual = v7 + "";
const v12 = new Date("Sep 24, 11:58:00 105");
var expect = v12 + "";
f0(BUGNUMBER);
f0(summary);
f0(expect, actual, summary);
