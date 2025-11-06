function f0() {
}
var BUGNUMBER = 316885;
var summary = "Unrooted access in jsinterp.c";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
var str = "test";
function f13() {
    return str + "1";
}
var lval = { valueOf: f13 };
var ONE = 1;
function f20() {
    var tmp = "x" + lval;
    if (typeof gc == "function") {
        gc();
    }
    for (let i30 = 0; i30 != 40000; ++i30) {
        tmp = 1e+100 / ONE;
    }
    return str;
}
var rval = { valueOf: f20 };
f0(expect = (str + "1") + str, actual = lval + rval, summary);
