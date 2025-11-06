function f0() {
}
var UBound = 0;
var BUGNUMBER = 203841;
var summary = "Testing merged if-clauses";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
let v21;
try { v21 = inSection(1); } catch (e) {}
status = v21;
var a = 0;
var b = 0;
var c = 0;
a == 5;
if (b == 6) {
    c = 1;
}
actual = c;
expect = 0;
try { addThis(); } catch (e) {}
let v37;
try { v37 = inSection(2); } catch (e) {}
status = v37;
a = 5;
b = 0;
c = 0;
a == 5;
if (b == 6) {
    c = 1;
}
actual = c;
expect = 0;
try { addThis(); } catch (e) {}
let v49;
try { v49 = inSection(3); } catch (e) {}
status = v49;
a = 5;
b = 6;
c = 0;
a == 5;
if (b == 6) {
    c = 1;
}
actual = c;
expect = 1;
try { addThis(); } catch (e) {}
let v61;
try { v61 = inSection(4); } catch (e) {}
status = v61;
a = 0;
b = 6;
c = 0;
a = 5;
if (b == 6) {
    c = 1;
}
actual = c;
expect = 1;
try { addThis(); } catch (e) {}
let v72;
try { v72 = inSection(5); } catch (e) {}
status = v72;
c = 0;
if (1 == 6) {
    c = 1;
}
actual = c;
expect = 0;
try { addThis(); } catch (e) {}
var x = [];
let v84;
try { v84 = inSection(6); } catch (e) {}
status = v84;
c = 0;
if (x?.[1 == 2]) {
    c = 1;
}
actual = c;
expect = 0;
try { addThis(); } catch (e) {}
let v94;
try { v94 = inSection(7); } catch (e) {}
status = v94;
c = 0;
x[1 == 2] = 1;
if (1) {
    c = 1;
}
actual = c;
expect = 1;
try { addThis(); } catch (e) {}
let v104;
try { v104 = inSection(8); } catch (e) {}
status = v104;
c = 0;
if (delete x?.[1 == 2]) {
    c = 1;
}
actual = c;
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
    for (let i121 = 0; i121 < UBound; i121++) {
        const v126 = expectedvalues?.[i121];
        const v127 = actualvalues?.[i121];
        const v128 = statusitems?.[i121];
        try { f0(v126, v127, v128); } catch (e) {}
    }
}
