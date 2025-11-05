function f0() {
}
var UBound = 0;
var BUGNUMBER = 511859;
var summary = "Utf8ToOneUcs4Char in jsstr.cpp ,overlong UTF-8 seqence detection problem";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
var arg;
var EX = "(Exception thrown)";
function getActual(a24) {
    try {
        return decodeURI(a24);
    } catch(e27) {
        return EX;
    }
}
expect = EX;
arg = "%C1%BF";
status = "Overlong 2byte U+7f :" + arg;
actual = getActual(arg);
addThis();
arg = "%E0%9F%BF";
status = "Overlong 3byte U+7ff :" + arg;
actual = getActual(arg);
addThis();
arg = "%F0%88%80%80";
status = "Overlong 4byte U+8000 :" + arg;
actual = getActual(arg);
addThis();
arg = "%F0%8F%BF%BF";
status = "Overlong 4byte U+ffff :" + arg;
actual = getActual(arg);
addThis();
arg = "%F0%80%C0%80%80";
status = "Overlong 5byte U+20000 :" + arg;
actual = getActual(arg);
addThis();
arg = "%F8%84%8F%BF%BF";
status = "Overlong 5byte U+10FFFF :" + arg;
actual = getActual(arg);
addThis();
arg = "%FC%80%84%8F%BF%BF";
status = "Overlong 6byte U+10FFFF :" + arg;
actual = getActual(arg);
addThis();
arg = "%F4%90%80%80%80";
status = "4byte 0x110000 :" + arg;
actual = getActual(arg);
addThis();
arg = "%F8%84%90%80%80";
status = "5byte 0x110000 :" + arg;
actual = getActual(arg);
addThis();
arg = "%FC%80%84%90%80%80";
status = "6byte 0x110000 :" + arg;
actual = getActual(arg);
addThis();
arg = "%7F";
status = "valid sequence U+7F :" + arg;
actual = getActual("%7F");
expect = "";
addThis();
arg = "%C2%80";
status = "valid sequence U+80 :" + arg;
actual = getActual(arg);
expect = "";
addThis();
arg = "%E0%A0%80";
status = "valid sequence U+800 :" + arg;
actual = getActual("%E0%A0%80");
expect = "ࠀ";
addThis();
arg = "%F0%90%80%80";
status = "valid sequence U+10000 :" + arg;
actual = getActual(arg);
expect = "𐀀";
addThis();
arg = "%F4%8F%BF%BF";
status = "valid sequence U+10FFFF :" + arg;
actual = getActual(arg);
expect = "􏿿";
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
    for (let i119 = 0; i119 < UBound; i119++) {
        f0(expectedvalues[i119], actualvalues[i119], statusitems[i119]);
    }
}
