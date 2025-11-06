function f0() {
}
var BUGNUMBER = 1099956;
var summary = "The token next to yield should be tokenized as non-operand if yield is " + "a valid name";
f0(BUGNUMBER);
f0(summary);
var yield = 12;
var a = 3;
var b = 6;
var g = 2;
var yieldParsedAsIdentifier = false;
yield / a;
yieldParsedAsIdentifier = true;
b / g;
f0(true, true);
