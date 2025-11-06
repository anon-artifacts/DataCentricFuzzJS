function f0() {
}
var BUGNUMBER = 338804;
var summary = "GC hazards in constructor functions";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
if (typeof Script != "undefined") {
    Script({ toString: fillHeap });
}
RegExp({ toString: fillHeap });
function fillHeap() {
    if (typeof gc == "function") {
        gc();
    }
    var x = 1;
    var tmp;
    for (let i33 = 0; i33 != 50000; ++i33) {
        tmp = x / 3;
    }
}
f0(expect, actual, summary);
