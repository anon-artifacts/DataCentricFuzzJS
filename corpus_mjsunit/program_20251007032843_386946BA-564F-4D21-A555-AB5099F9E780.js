function f0() {
}
var UBound = 0;
var BUGNUMBER = "(none)";
var summary = "Truncating arrays that have decimal property names";
var BIG_INDEX = 4294967290;
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
let v22;
try { v22 = Array(BIG_INDEX); } catch (e) {}
var arr = v22;
arr[BIG_INDEX - 1] = "a";
arr[BIG_INDEX - 10000] = "b";
arr[BIG_INDEX - 0.5] = "c";
arr.length = BIG_INDEX - 5000;
var s = "";
for (const v37 in arr) {
    s += arr?.[v37];
}
let v41;
try { v41 = inSection(1); } catch (e) {}
status = v41;
let v43;
try { v43 = sortThis(s); } catch (e) {}
actual = v43;
expect = "bc";
try { addThis(); } catch (e) {}
try { test(); } catch (e) {}
function sortThis(a50) {
    let v52;
    try { v52 = a50.split(""); } catch (e) {}
    var chars = v52;
    let v54;
    try { v54 = chars.sort(); } catch (e) {}
    chars = v54;
    let v56;
    try { v56 = chars.join(""); } catch (e) {}
    return v56;
}
function addThis() {
    statusitems[UBound] = status;
    actualvalues[UBound] = actual;
    expectedvalues[UBound] = expect;
    UBound++;
}
function test() {
    try { f0(BUGNUMBER); } catch (e) {}
    try { f0(summary); } catch (e) {}
    for (let i63 = 0; i63 < UBound; i63++) {
        const v68 = expectedvalues?.[i63];
        const v69 = actualvalues?.[i63];
        const v70 = statusitems?.[i63];
        try { f0(v68, v69, v70); } catch (e) {}
    }
}
