function f0() {
}
var UBound = 0;
var BUGNUMBER = 131348;
var summary = "JS should not error on |for(i in undefined)|, |for(i in null)|";
var TEST_PASSED = "No error";
var TEST_FAILED = "An error was generated!!!";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
let v25;
try { v25 = inSection(1); } catch (e) {}
status = v25;
expect = TEST_PASSED;
actual = TEST_PASSED;
try {
    for (const v27 in undefined) {
        try { f0(v27); } catch (e) {}
    }
} catch(e29) {
    actual = TEST_FAILED;
}
try { addThis(); } catch (e) {}
let v33;
try { v33 = inSection(2); } catch (e) {}
status = v33;
expect = TEST_PASSED;
actual = TEST_PASSED;
try {
    for (const v35 in null) {
        try { f0(v35); } catch (e) {}
    }
} catch(e37) {
    actual = TEST_FAILED;
}
try { addThis(); } catch (e) {}
let v40;
try { v40 = inSection(3); } catch (e) {}
status = v40;
expect = TEST_PASSED;
actual = TEST_PASSED;
try {
    for (const v43 in this?.ZZZ) {
        try { f0(v43); } catch (e) {}
    }
} catch(e45) {
    actual = TEST_FAILED;
}
try { addThis(); } catch (e) {}
let v48;
try { v48 = inSection(4); } catch (e) {}
status = v48;
expect = TEST_PASSED;
actual = TEST_PASSED;
try {
    const v49 = /aaa/;
    let v51;
    try { v51 = ("bbb").match(v49); } catch (e) {}
    for (const v52 in v51) {
        try { f0(v52); } catch (e) {}
    }
} catch(e54) {
    actual = TEST_FAILED;
}
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
    for (let i64 = 0; i64 < UBound; i64++) {
        const v69 = expectedvalues?.[i64];
        const v70 = actualvalues?.[i64];
        const v71 = statusitems?.[i64];
        try { f0(v69, v70, v71); } catch (e) {}
    }
}
