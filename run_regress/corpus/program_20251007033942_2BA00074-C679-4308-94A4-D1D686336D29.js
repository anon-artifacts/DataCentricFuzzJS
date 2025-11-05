function f0() {
}
var BUGNUMBER = 320032;
var summary = "Parenthesization should not dereference ECMA Reference type";
var actual = "No error";
var expect = "No error";
f0(BUGNUMBER);
f0(summary);
if ((typeof document != "undefined") && ("getElementById" in document)) {
    try {
        document.getElementById("x");
    } catch(e20) {
        actual = e20 + "";
    }
}
f0(expect, actual, summary);
