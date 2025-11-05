function f0() {
}
var BUGNUMBER = 407727;
var summary = "let Object global redeclaration";
var actual = "";
var expect = 1;
f0(BUGNUMBER);
f0(summary);
let Object = 1;
f0(expect, actual = Object, summary);
