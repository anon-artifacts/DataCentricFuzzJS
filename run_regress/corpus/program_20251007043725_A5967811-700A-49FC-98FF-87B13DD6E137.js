function f0() {
}
var BUGNUMBER = 382503;
var summary = "Do not assert: with prototype=regexp";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
function f(a12) {
    prototype = /a/;
    if (a12) {
        return /b/;
        return /c/;
    } else {
        return /d/;
    }
}
void f(false);
f0(expect, actual, summary);
