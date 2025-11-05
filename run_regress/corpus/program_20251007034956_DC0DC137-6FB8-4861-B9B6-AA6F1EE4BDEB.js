function f0() {
}
var UBound = 0;
var BUGNUMBER = 222029;
var summary = "Make our f.caller property match IE's wrt f.apply and f.call";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
function f() {
    return f?.caller?.p;
}
function g() {
    let v23;
    try { v23 = f(); } catch (e) {}
    return v23;
}
g.p = "hello";
function gg() {
    let v27;
    try { v27 = f.call(this); } catch (e) {}
    return v27;
}
gg.p = "hello";
function ggg() {
    let v31;
    try { v31 = f.apply(this); } catch (e) {}
    return v31;
}
ggg.p = "hello";
const t32 = Function?.prototype?.call;
t32.p = "goodbye";
const t34 = Function?.prototype?.apply;
t34.p = "goodbye";
let v42;
try { v42 = inSection(1); } catch (e) {}
status = v42;
let v43;
try { v43 = g(); } catch (e) {}
actual = v43;
expect = "hello";
try { addThis(); } catch (e) {}
let v48;
try { v48 = inSection(2); } catch (e) {}
status = v48;
let v49;
try { v49 = gg(); } catch (e) {}
actual = v49;
expect = "hello";
try { addThis(); } catch (e) {}
let v53;
try { v53 = inSection(3); } catch (e) {}
status = v53;
let v54;
try { v54 = ggg(); } catch (e) {}
actual = v54;
expect = "hello";
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
