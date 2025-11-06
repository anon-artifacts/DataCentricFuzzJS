function f0() {
}
var BUGNUMBER = 407501;
var summary = "JSOP_NEWINIT lacks SAVE_SP_AND_PC ";
var actual = "No Crash";
var expect = "No Crash";
try { test(); } catch (e) {}
function test() {
    f0(BUGNUMBER);
    f0(summary);
    if (typeof gczeal == "function") {
        try { gczeal(2); } catch (e) {}
    }
    var a = [[[[[[[0]]]]]]];
    let v30;
    try { v30 = uneval(a); } catch (e) {}
    if (v30?.length == 0) {
        throw "Unexpected result";
    }
    if (typeof gczeal == "function") {
        try { gczeal(0); } catch (e) {}
    }
    try { f0(expect, actual, summary); } catch (e) {}
}
