function f0() {
}
var BUGNUMBER = 336100;
var summary = "bug 336100 - arguments regressed";
var actual = "";
var expect;
f0(BUGNUMBER);
f0(summary);
var arguments = [];
expect = "[object Arguments]";
function f14() {
    return arguments + "";
}
actual = f14();
f0(expect, actual, summary);
expect = "";
function f20() {
    with (this) {
        return arguments + "";
    }
}
actual = f20();
f0(expect, actual, summary);
