function f0() {
}
var BUGNUMBER = 339685;
var summary = "Setting __proto__ null should not affect __iterator__";
var actual = "";
var expect = "No Error";
f0(BUGNUMBER);
f0(summary);
var d = { a: 2, b: 3 };
d.__proto__ = null;
try {
    for (const v16 in d) {
    }
    actual = "No Error";
} catch(e18) {
    actual = e18 + "";
}
f0(expect, actual, summary);
