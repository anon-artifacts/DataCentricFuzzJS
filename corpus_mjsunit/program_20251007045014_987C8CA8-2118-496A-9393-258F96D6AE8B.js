function f0() {
}
var UBound = 0;
var BUGNUMBER = 90325;
var summary = "Testing visiblity of variables from within a with block";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
var A = "global A";
var B = "global B";
var C = "global C";
var D = "global D";
const v28 = new Object();
var objTEST = v28;
objTEST.C = C;
objTEST.D = D;
status = "Section 1 of test";
const v31 = new Object();
with (v31) {
    actual = A;
    expect = "global A";
}
addThis();
status = "Section 2 of test";
with (Function) {
    actual = B;
    expect = "global B";
}
addThis();
status = "Section 3 of test";
with (this) {
    actual = C;
    expect = "global C";
}
addThis();
status = "Section 4 of test";
localA();
addThis();
status = "Section 5 of test";
localB();
addThis();
status = "Section 6 of test";
localC();
addThis();
status = "Section 7 of test";
const v56 = new Object();
localC(v56);
addThis();
status = "Section 8 of test";
const v60 = new Object();
localC.apply(v60);
addThis();
status = "Section 9 of test";
const v64 = new Object();
localC.apply(v64, [objTEST]);
addThis();
status = "Section 10 of test";
localC.apply(objTEST, [objTEST]);
addThis();
status = "Section 11 of test";
const v73 = new Object();
localD(v73);
addThis();
status = "Section 12 of test";
const v78 = new Object();
localD.apply(v78, [objTEST]);
addThis();
status = "Section 13 of test";
localD.apply(objTEST, [objTEST]);
addThis();
test();
function localA() {
    var A = "local A";
    const v91 = new Object();
    with (v91) {
        actual = A;
        expect = "local A";
    }
}
function localB() {
    var B = "local B";
    with (Number) {
        actual = B;
        expect = "local B";
    }
}
function localC(a99) {
    var C = "local C";
    with (this) {
        actual = C;
    }
    if ("C" in this) {
        expect = this.C;
    } else {
        expect = "local C";
    }
}
function localD(a110) {
    var D = "local D";
    with (a110) {
        actual = D;
    }
    if ("D" in a110) {
        expect = a110.D;
    } else {
        expect = "local D";
    }
}
function addThis() {
    statusitems[UBound] = status;
    actualvalues[UBound] = actual;
    expectedvalues[UBound] = expect;
    UBound++;
}
function test() {
    f0(BUGNUMBER);
    f0(summary);
    for (let i123 = 0; i123 < UBound; i123++) {
        f0(expectedvalues[i123], actualvalues[i123], statusitems[i123]);
    }
}
