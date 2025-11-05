function f0() {
}
var UBound = 0;
var BUGNUMBER = 193418;
var summary = "Testing empty blocks";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
function f() {
    while (0) {
        {
        }
    }
    actual = true;
}
let v24;
try { v24 = inSection(1); } catch (e) {}
status = v24;
try { f(); } catch (e) {}
expect = true;
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
    for (let i37 = 0; i37 < UBound; i37++) {
        const v42 = expectedvalues?.[i37];
        const v43 = actualvalues?.[i37];
        const v44 = statusitems?.[i37];
        try { f0(v42, v43, v44); } catch (e) {}
    }
}
