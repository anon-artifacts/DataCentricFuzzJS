function f0() {
}
var BUGNUMBER = 375344;
var summary = "accessing prototype of DOM objects should throw catchable error";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
if (typeof HTMLElement != "undefined") {
    expect = /TypeError/;
    try {
        f0(HTMLElement.prototype.nodeName);
    } catch(e19) {
        actual = e19 + "";
        f0(actual);
    }
    f0(expect, actual, summary);
} else {
    actual = "Test can only run in a Gecko 1.9 browser or later.";
    expect = "Test can only run in a Gecko 1.9 browser or later.";
    f0(actual);
    f0(expect, actual, summary);
}
