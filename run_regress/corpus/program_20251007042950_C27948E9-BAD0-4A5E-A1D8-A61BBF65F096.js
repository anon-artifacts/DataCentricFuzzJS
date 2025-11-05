function f0() {
}
var BUGNUMBER = 244619;
var summary = "Don't Crash";
var actual = "Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
function f1() {
    const v13 = new Object();
    var o = v13;
    eval.call(o, "var a = 'vodka'");
}
try {
    f1();
} catch(e19) {
}
f0(expect, actual = "No Crash", summary);
