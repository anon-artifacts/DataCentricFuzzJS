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
var p = "global";
var o = { p: "object" };
function f(a25) {
    return f?.caller?.p;
}
function g(a29) {
    var p = "local";
    let v32;
    try { v32 = f(a29); } catch (e) {}
    return v32;
}
g.p = "hello";
function gg(a35) {
    var p = "local";
    let v38;
    try { v38 = f.call(a35, a35); } catch (e) {}
    return v38;
}
gg.p = "hello";
function ggg(a41) {
    var p = "local";
    const v44 = [a41];
    let v45;
    try { v45 = f.apply(a41, v44); } catch (e) {}
    return v45;
}
ggg.p = "hello";
const t38 = Function?.prototype?.call;
t38.p = "goodbye";
const t40 = Function?.prototype?.apply;
t40.p = "goodbye";
let v56;
try { v56 = inSection(1); } catch (e) {}
status = v56;
let v57;
try { v57 = g(o); } catch (e) {}
actual = v57;
expect = "hello";
try { addThis(); } catch (e) {}
let v62;
try { v62 = inSection(2); } catch (e) {}
status = v62;
let v63;
try { v63 = gg(o); } catch (e) {}
actual = v63;
expect = "hello";
try { addThis(); } catch (e) {}
let v67;
try { v67 = inSection(3); } catch (e) {}
status = v67;
let v68;
try { v68 = ggg(o); } catch (e) {}
actual = v68;
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
    for (let i79 = 0; i79 < UBound; i79++) {
        const v84 = expectedvalues?.[i79];
        const v85 = actualvalues?.[i79];
        const v86 = statusitems?.[i79];
        try { f0(v84, v85, v86); } catch (e) {}
    }
}
