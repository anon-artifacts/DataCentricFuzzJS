function f0() {
}
var UBound = 0;
var BUGNUMBER = 76054;
var summary = "Testing that String HTML methods produce all lower-case";
var statprefix = "Currently testing String.";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
var s = "xyz";
status = "anchor()";
actual = s.anchor();
expect = actual.toLowerCase();
addThis();
status = "big()";
actual = s.big();
expect = actual.toLowerCase();
addThis();
status = "blink()";
actual = s.blink();
expect = actual.toLowerCase();
addThis();
status = "bold()";
actual = s.bold();
expect = actual.toLowerCase();
addThis();
status = "italics()";
actual = s.italics();
expect = actual.toLowerCase();
addThis();
status = "fixed()";
actual = s.fixed();
expect = actual.toLowerCase();
addThis();
status = "fontcolor()";
actual = s.fontcolor();
expect = actual.toLowerCase();
addThis();
status = "fontsize()";
actual = s.fontsize();
expect = actual.toLowerCase();
addThis();
status = "link()";
actual = s.link();
expect = actual.toLowerCase();
addThis();
status = "small()";
actual = s.small();
expect = actual.toLowerCase();
addThis();
status = "strike()";
actual = s.strike();
expect = actual.toLowerCase();
addThis();
status = "sub()";
actual = s.sub();
expect = actual.toLowerCase();
addThis();
status = "sup()";
actual = s.sup();
expect = actual.toLowerCase();
addThis();
test();
function addThis() {
    statusitems[UBound] = status;
    actualvalues[UBound] = actual;
    expectedvalues[UBound] = expect;
    UBound++;
}
function test() {
    f0(BUGNUMBER);
    f0(summary);
    for (let i84 = 0; i84 < UBound; i84++) {
        f0(expectedvalues[i84], actualvalues[i84], getStatus(i84));
    }
}
function getStatus(a95) {
    return statprefix + statusitems[a95];
}
