function f0() {
}
var UBound = 0;
var BUGNUMBER = 202678;
var summary = "Testing nested function scope capture";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
var self = this;
function myFunc() {
    var hidden = "aaa";
    try { insideFunc(); } catch (e) {}
    if (!self?.runOnce) {
        var hidden = "bbb";
        self.outSideFunc = insideFunc;
        self.runOnce = true;
    } else {
        var hidden = "ccc";
        self.outSideFunc = insideFunc;
    }
    function insideFunc() {
        actual = hidden;
    }
}
let v36;
try { v36 = inSection(1); } catch (e) {}
status = v36;
try { myFunc(); } catch (e) {}
expect = "aaa";
try { addThis(); } catch (e) {}
let v42;
try { v42 = inSection(2); } catch (e) {}
status = v42;
try { outSideFunc(); } catch (e) {}
expect = "bbb";
try { addThis(); } catch (e) {}
let v48;
try { v48 = inSection(3); } catch (e) {}
status = v48;
try { myFunc(); } catch (e) {}
expect = "aaa";
try { addThis(); } catch (e) {}
let v53;
try { v53 = inSection(4); } catch (e) {}
status = v53;
try { outSideFunc(); } catch (e) {}
expect = "ccc";
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
    for (let i65 = 0; i65 < UBound; i65++) {
        const v70 = expectedvalues?.[i65];
        const v71 = actualvalues?.[i65];
        const v72 = statusitems?.[i65];
        try { f0(v70, v71, v72); } catch (e) {}
    }
}
