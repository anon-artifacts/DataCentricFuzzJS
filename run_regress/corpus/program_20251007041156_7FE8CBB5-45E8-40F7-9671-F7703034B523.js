function f0() {
}
var BUGNUMBER = 320172;
var summary = "Regression from bug 285219";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
try {
    function xxx() {
        (["var x"]).forEach(eval);
    }
    xxx();
} catch(e17) {
}
f0("No Crash");
f0(expect, actual, summary);
