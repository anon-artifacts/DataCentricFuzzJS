function f0() {
}
var UBound = 0;
var BUGNUMBER = 203402;
var summary = "Testing the ternary query operator";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
let v21;
try { v21 = inSection(1); } catch (e) {}
status = v21;
actual = "" + (1 == 0) ? "" : "";
expect = "";
try { addThis(); } catch (e) {}
try { test(); } catch (e) {}
function addThis() {
    statusitems[UBound] = status;
    actualvalues[UBound] = actual;
    expectedvalues[UBound] = expect;
    UBound++;
}
function test() {
    try { f0(BUGNUMBER); } catch (e) {}
    try { f0(summary); } catch (e) {}
    for (let i41 = 0; i41 < UBound; i41++) {
        const v46 = expectedvalues?.[i41];
        const v47 = actualvalues?.[i41];
        const v48 = statusitems?.[i41];
        try { f0(v46, v47, v48); } catch (e) {}
    }
}
