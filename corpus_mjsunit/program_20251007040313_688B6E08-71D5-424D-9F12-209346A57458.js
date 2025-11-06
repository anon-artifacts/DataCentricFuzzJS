function f0() {
}
var BUGNUMBER = 465337;
var summary = "Do not assert: (m != JSVAL_INT) || isInt32(*vp)";
var actual = "";
var expect = "";
try { test(); } catch (e) {}
function test() {
    try { f0(BUGNUMBER); } catch (e) {}
    try { f0(summary); } catch (e) {}
    var out = [];
    for (let i17 = 0; i17 < 5; ++i17) {
        const v28 = 6 - (void 0 ^ 2147483653);
        try { out.push(v28); } catch (e) {}
    }
    let v31;
    try { v31 = uneval(out); } catch (e) {}
    try { f0(v31); } catch (e) {}
    try { f0(expect, actual, summary); } catch (e) {}
}
