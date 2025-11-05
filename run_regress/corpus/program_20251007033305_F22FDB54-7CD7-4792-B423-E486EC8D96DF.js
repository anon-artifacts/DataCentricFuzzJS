function f0() {
}
var UBound = 0;
var BUGNUMBER = 210682;
var summary = "testing line ending with |continue| and only terminated by CR";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
for (i = 0; i < 100; i++) {
    if ((i % 2) == 0) {
        continue;
    }
    this.lasti = i;
}
let v34;
try { v34 = inSection(1); } catch (e) {}
status = v34;
actual = lasti;
expect = 99;
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
    for (let i47 = 0; i47 < UBound; i47++) {
        const v52 = expectedvalues?.[i47];
        const v53 = actualvalues?.[i47];
        const v54 = statusitems?.[i47];
        try { f0(v52, v53, v54); } catch (e) {}
    }
}
