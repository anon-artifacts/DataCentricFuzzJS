function f0() {
}
var UBound = 0;
var BUGNUMBER = 192226;
var summary = "Testing a nested function call under |with| or |catch|";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
var counter = 0;
function f() {
    try {
        with (Math) {
            try { test0(); } catch (e) {}
            try { test1(sin); } catch (e) {}
        }
        throw 1;
    } catch(e29) {
        try { test0(); } catch (e) {}
        try { test1(e29); } catch (e) {}
    }
}
function test0() {
    ++counter;
}
function test1(a37) {
    ++counter;
}
let v41;
try { v41 = inSection(1); } catch (e) {}
status = v41;
try { f(); } catch (e) {}
actual = counter;
expect = 4;
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
    for (let i54 = 0; i54 < UBound; i54++) {
        const v59 = expectedvalues?.[i54];
        const v60 = actualvalues?.[i54];
        const v61 = statusitems?.[i54];
        try { f0(v59, v60, v61); } catch (e) {}
    }
}
