function f0() {
}
var UBound = 0;
var BUGNUMBER = 118849;
var summary = "Should not crash if we provide Function() with bad arguments";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
var cnFAIL_1 = "LEGAL call to Function() caused an ERROR!!!";
var cnFAIL_2 = "ILLEGAL call to Function() FAILED to cause an error";
var cnSTRING = "ASDF";
var cnNUMBER = 123;
let v29;
try { v29 = inSection(1); } catch (e) {}
status = v29;
actual = cnFAIL_1;
try {
    try { Function(cnSTRING); } catch (e) {}
    try { Function(cnNUMBER); } catch (e) {}
    try { Function(cnSTRING, cnSTRING); } catch (e) {}
    try { Function(cnSTRING, cnNUMBER); } catch (e) {}
    try { Function(cnSTRING, cnSTRING, cnNUMBER); } catch (e) {}
    try { new Function(cnSTRING); } catch (e) {}
    try { new Function(cnNUMBER); } catch (e) {}
    try { new Function(cnSTRING, cnSTRING); } catch (e) {}
    try { new Function(cnSTRING, cnNUMBER); } catch (e) {}
    try { new Function(cnSTRING, cnSTRING, cnNUMBER); } catch (e) {}
    actual = expect;
} catch(e41) {
}
try { addThis(); } catch (e) {}
let v45;
try { v45 = inSection(2); } catch (e) {}
status = v45;
actual = cnFAIL_2;
try {
    try { Function(cnNUMBER, cnNUMBER); } catch (e) {}
} catch(e48) {
    actual = expect;
}
try { addThis(); } catch (e) {}
let v51;
try { v51 = inSection(3); } catch (e) {}
status = v51;
actual = cnFAIL_2;
try {
    try { Function(cnNUMBER, cnSTRING, cnSTRING); } catch (e) {}
} catch(e54) {
    actual = expect;
}
try { addThis(); } catch (e) {}
let v57;
try { v57 = inSection(4); } catch (e) {}
status = v57;
actual = cnFAIL_2;
try {
    try { new Function(cnNUMBER, cnNUMBER); } catch (e) {}
} catch(e60) {
    actual = expect;
}
try { addThis(); } catch (e) {}
let v63;
try { v63 = inSection(5); } catch (e) {}
status = v63;
actual = cnFAIL_2;
try {
    try { new Function(cnNUMBER, cnSTRING, cnSTRING); } catch (e) {}
} catch(e66) {
    actual = expect;
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
    for (let i76 = 0; i76 < UBound; i76++) {
        const v81 = expectedvalues?.[i76];
        const v82 = actualvalues?.[i76];
        const v83 = statusitems?.[i76];
        try { f0(v81, v82, v83); } catch (e) {}
    }
}
