function f0() {
}
var UBound = 0;
var BUGNUMBER = 184107;
var summary = "with(...) { function f ...} should set f in the global scope";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
var obj = { y: 10 };
with (obj) {
    function f() {
        return obj?.y;
    }
    function f24() {
        return y;
    }
    g = f24;
}
let v29;
try { v29 = inSection(1); } catch (e) {}
status = v29;
actual = obj?.f;
expect = undefined;
try { addThis(); } catch (e) {}
let v35;
try { v35 = inSection(2); } catch (e) {}
status = v35;
let v37;
try { v37 = f(); } catch (e) {}
actual = v37;
expect = obj?.y;
try { addThis(); } catch (e) {}
let v41;
try { v41 = inSection(3); } catch (e) {}
status = v41;
actual = obj?.g;
expect = undefined;
try { addThis(); } catch (e) {}
let v46;
try { v46 = inSection(4); } catch (e) {}
status = v46;
let v48;
try { v48 = g(); } catch (e) {}
actual = v48;
expect = obj?.y;
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
    for (let i59 = 0; i59 < UBound; i59++) {
        const v64 = expectedvalues?.[i59];
        const v65 = actualvalues?.[i59];
        const v66 = statusitems?.[i59];
        try { f0(v64, v65, v66); } catch (e) {}
    }
}
