function f0() {
}
var UBound = 0;
var BUGNUMBER = 97921;
var summary = "Testing with() statement with nested functions";
var cnYES = "Inner value === outer value";
var cnNO = "Inner value !== outer value!";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
var outerValue = "";
var innerValue = "";
var useWith = "";
function F(a30) {
    a30 = 0;
    if (useWith) {
        with (1) {
        }
    }
    a30++;
    outerValue = a30;
    function f34() {
        innerValue = a30;
    }
    F1 = f34;
    try { F1(); } catch (e) {}
}
let v40;
try { v40 = inSection(1); } catch (e) {}
status = v40;
useWith = false;
try { F(); } catch (e) {}
actual = innerValue === outerValue;
expect = true;
try { addThis(); } catch (e) {}
let v48;
try { v48 = inSection(2); } catch (e) {}
status = v48;
useWith = true;
try { F(); } catch (e) {}
actual = innerValue === outerValue;
expect = true;
try { addThis(); } catch (e) {}
function G(a55) {
    a55 = 0;
    let v58;
    try { v58 = new Object(); } catch (e) {}
    with (v58) {
        a55 = 100;
    }
    a55++;
    outerValue = a55;
    function f61() {
        innerValue = a55;
    }
    G1 = f61;
    try { G1(); } catch (e) {}
}
let v66;
try { v66 = inSection(3); } catch (e) {}
status = v66;
try { G(); } catch (e) {}
actual = innerValue === 101;
expect = true;
try { addThis(); } catch (e) {}
let v73;
try { v73 = inSection(4); } catch (e) {}
status = v73;
try { G(); } catch (e) {}
actual = innerValue === outerValue;
expect = true;
try { addThis(); } catch (e) {}
try { test(); } catch (e) {}
function addThis() {
    statusitems[UBound] = status;
    let v82;
    try { v82 = areTheseEqual(actual); } catch (e) {}
    actualvalues[UBound] = v82;
    let v83;
    try { v83 = areTheseEqual(expect); } catch (e) {}
    expectedvalues[UBound] = v83;
    UBound++;
}
function test() {
    try { f0(BUGNUMBER); } catch (e) {}
    try { f0(summary); } catch (e) {}
    for (let i89 = 0; i89 < UBound; i89++) {
        const v94 = expectedvalues?.[i89];
        const v95 = actualvalues?.[i89];
        const v96 = statusitems?.[i89];
        try { f0(v94, v95, v96); } catch (e) {}
    }
}
function areTheseEqual(a99) {
    return a99 ? cnYES : cnNO;
}
