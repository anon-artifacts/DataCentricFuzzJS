function f0() {
}
var UBound = 0;
var BUGNUMBER = 137181;
var summary = "delete arguments[i] should break connection to local reference";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
let v21;
try { v21 = inSection(1); } catch (e) {}
status = v21;
function f1(a23) {
    a23 = 1;
    delete arguments?.[0];
    return a23;
}
let v29;
try { v29 = f1(0); } catch (e) {}
actual = v29;
expect = 1;
try { addThis(); } catch (e) {}
let v34;
try { v34 = inSection(2); } catch (e) {}
status = v34;
function f2(a36) {
    a36 = 1;
    delete arguments?.[0];
    arguments[0] = -1;
    return a36;
}
let v45;
try { v45 = f2(0); } catch (e) {}
actual = v45;
expect = 1;
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
    for (let i56 = 0; i56 < UBound; i56++) {
        const v61 = expectedvalues?.[i56];
        const v62 = actualvalues?.[i56];
        const v63 = statusitems?.[i56];
        try { f0(v61, v62, v63); } catch (e) {}
    }
}
