function f0() {
}
var BUGNUMBER = 328443;
var summary = "Uncatchable exception with |new (G.call) (F);| when F proto is null";
var actual = "";
var expect = "Exception caught";
f0(BUGNUMBER);
f0(summary);
function f11() {
}
var F = f11;
F.__proto__ = null;
function f14() {
}
var G = f14;
var z;
z = "uncatchable exception!!!";
try {
    const t18 = G.call;
    new t18(F);
    actual = "No exception";
} catch(e22) {
    actual = "Exception caught";
    f0("Exception was caught: " + e22);
}
f0(expect, actual, summary);
