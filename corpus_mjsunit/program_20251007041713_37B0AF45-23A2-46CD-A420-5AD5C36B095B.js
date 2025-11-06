function f0() {
}
var UBound = 0;
var BUGNUMBER = 185485;
var summary = "Testing |with (x) {function f() {}}| when |x.f| already exists";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
var x = { f: 0, g: 0 };
with (x) {
    f = 1;
}
let v27;
try { v27 = inSection(1); } catch (e) {}
status = v27;
actual = x?.f;
expect = 1;
try { addThis(); } catch (e) {}
with (x) {
    var f = 2;
}
let v35;
try { v35 = inSection(2); } catch (e) {}
status = v35;
actual = x?.f;
expect = 2;
try { addThis(); } catch (e) {}
with (x) {
    function f() {
    }
}
let v41;
try { v41 = inSection(3); } catch (e) {}
status = v41;
actual = x?.f;
expect = 2;
try { addThis(); } catch (e) {}
let v46;
try { v46 = inSection(4); } catch (e) {}
status = v46;
actual = typeof this?.f;
expect = "function";
try { addThis(); } catch (e) {}
with (x) {
    function f52() {
    }
    var g = f52;
}
let v55;
try { v55 = inSection(5); } catch (e) {}
status = v55;
const v56 = x?.g;
let v57;
try { v57 = v56.toString(); } catch (e) {}
actual = v57;
function f58() {
}
let v59;
try { v59 = f58.toString(); } catch (e) {}
expect = v59;
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
