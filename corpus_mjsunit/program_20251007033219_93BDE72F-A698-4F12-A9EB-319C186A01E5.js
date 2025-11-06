function f0() {
}
var UBound = 0;
var BUGNUMBER = 191276;
var summary = "Testing |this[name]| via Function.prototype.call(), apply()";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
function F(a20) {
    return this?.[a20];
}
function unused_function() {
    try { F("a"); } catch (e) {}
}
let v28;
try { v28 = inSection(1); } catch (e) {}
status = v28;
const v30 = { a: "aaa" };
let v32;
try { v32 = F.call(v30, "a"); } catch (e) {}
actual = v32;
expect = "aaa";
try { addThis(); } catch (e) {}
let v37;
try { v37 = inSection(2); } catch (e) {}
status = v37;
const v39 = { a: "aaa" };
const v41 = ["a"];
let v42;
try { v42 = F.apply(v39, v41); } catch (e) {}
actual = v42;
expect = "aaa";
try { addThis(); } catch (e) {}
var obj = { a: "aaa" };
let v49;
try { v49 = inSection(3); } catch (e) {}
status = v49;
let v51;
try { v51 = F.call(obj, "a"); } catch (e) {}
actual = v51;
expect = "aaa";
try { addThis(); } catch (e) {}
let v55;
try { v55 = inSection(4); } catch (e) {}
status = v55;
const v57 = ["a"];
let v58;
try { v58 = F.apply(obj, v57); } catch (e) {}
actual = v58;
expect = "aaa";
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
    for (let i69 = 0; i69 < UBound; i69++) {
        const v74 = expectedvalues?.[i69];
        const v75 = actualvalues?.[i69];
        const v76 = statusitems?.[i69];
        try { f0(v74, v75, v76); } catch (e) {}
    }
}
