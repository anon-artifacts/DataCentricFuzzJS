function f0() {
}
var BUGNUMBER = 312354;
var summary = "11.13.1 Simple Assignment should return type of RHS";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
var re = /x/g;
re.lastIndex = "7";
var y = "7";
f0(expect = "string", actual = typeof y, summary);
