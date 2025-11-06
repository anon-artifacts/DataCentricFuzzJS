function f0() {
}
var BUGNUMBER = 452913;
var summary = "Do not crash with defined getter and for (let)";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
function f12(a13) {
    return ("foo").replace(/o/g, ([1]).push);
}
this.__defineGetter__("x", f12);
for (const v24 in [,,,]) {
    for (const v27 in [,,,]) {
        x = x;
    }
}
f0(expect, actual, summary);
