function f0() {
}
var UBound = 0;
var BUGNUMBER = 170193;
var summary = "adding property after middle-delete of function w duplicate formal args";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
function f(a20, a21, a22) {
}
f.c = 42;
f.d = 43;
delete f?.c;
f.e = 44;
let v29;
try { v29 = inSection(1); } catch (e) {}
status = v29;
actual = f?.c;
expect = undefined;
try { addThis(); } catch (e) {}
let v35;
try { v35 = inSection(2); } catch (e) {}
status = v35;
actual = f?.d;
expect = 43;
try { addThis(); } catch (e) {}
let v40;
try { v40 = inSection(3); } catch (e) {}
status = v40;
actual = f?.e;
expect = 44;
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
    for (let i52 = 0; i52 < UBound; i52++) {
        const v57 = expectedvalues?.[i52];
        const v58 = actualvalues?.[i52];
        const v59 = statusitems?.[i52];
        try { f0(v57, v58, v59); } catch (e) {}
    }
}
