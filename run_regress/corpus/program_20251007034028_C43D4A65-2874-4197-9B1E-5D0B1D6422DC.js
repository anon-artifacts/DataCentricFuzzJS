function f0() {
}
var BUGNUMBER = 317476;
var summary = "The error thrown by JS_ReportError should be catchable";
var actual = "no error";
var expect = "no error";
f0(BUGNUMBER);
f0(summary);
if (typeof setTimeout != "undefined") {
    expect = "error";
    try {
        setTimeout();
    } catch(e17) {
        actual = "error";
        f0(e17 + "");
    }
}
f0(expect, actual, summary);
