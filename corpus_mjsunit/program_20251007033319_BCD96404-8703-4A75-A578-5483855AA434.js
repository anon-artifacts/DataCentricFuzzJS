function f0() {
}
var BUGNUMBER = 259935;
var summary = "document.all can be easily detected";
var actual = "";
var expect = "not detected";
f0(BUGNUMBER);
f0(summary);
if (typeof document == "undefined") {
    document = {};
}
function foo() {
    this.ie = document.all;
}
const v19 = new foo();
var f = v19;
if (f.ie) {
    actual = "detected";
} else {
    actual = "not detected";
}
f0(expect, actual, summary);
const v25 = document.all;
if ((f = { ie: v25 }).ie) {
    actual = "detected";
} else {
    actual = "not detected";
}
f0(expect, actual, summary);
