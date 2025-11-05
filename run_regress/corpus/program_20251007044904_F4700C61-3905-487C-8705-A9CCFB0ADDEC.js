function f0() {
}
var UBound = 0;
var BUGNUMBER = 130451;
var summary = "Array.prototype.sort() should not (re-)define .length";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
var arr = [];
let v22;
try { v22 = new Function(); } catch (e) {}
var cmp = v22;
let v26;
try { v26 = inSection(1); } catch (e) {}
status = v26;
arr = [0,1,2,3];
function f32(a33, a34) {
    return a33 - a34;
}
cmp = f32;
let v36;
try { v36 = arr.sort(cmp); } catch (e) {}
actual = v36?.length;
expect = 4;
try { addThis(); } catch (e) {}
let v42;
try { v42 = inSection(2); } catch (e) {}
status = v42;
arr = [0,1,2,3];
function f48(a49, a50) {
    return a50 - a49;
}
cmp = f48;
let v52;
try { v52 = arr.sort(cmp); } catch (e) {}
actual = v52?.length;
expect = 4;
try { addThis(); } catch (e) {}
let v57;
try { v57 = inSection(3); } catch (e) {}
status = v57;
arr = [0,1,2,3];
function f63(a64, a65) {
    return a64 - a65;
}
cmp = f63;
arr.length = 1;
let v68;
try { v68 = arr.sort(cmp); } catch (e) {}
actual = v68?.length;
expect = 1;
try { addThis(); } catch (e) {}
arr = [0,1,2,3];
function f77(a78, a79) {
    return a78 - a79;
}
cmp = f77;
try { arr.sort(cmp); } catch (e) {}
let v83;
try { v83 = inSection(4); } catch (e) {}
status = v83;
let v84;
try { v84 = arr.join(); } catch (e) {}
actual = v84;
expect = "0,1,2,3";
try { addThis(); } catch (e) {}
let v88;
try { v88 = inSection(5); } catch (e) {}
status = v88;
actual = arr?.length;
expect = 4;
try { addThis(); } catch (e) {}
let v93;
try { v93 = inSection(6); } catch (e) {}
status = v93;
arr.length = 2;
let v95;
try { v95 = arr.join(); } catch (e) {}
actual = v95;
expect = "0,1";
try { addThis(); } catch (e) {}
let v99;
try { v99 = inSection(7); } catch (e) {}
status = v99;
arr.length = 4;
let v101;
try { v101 = arr.join(); } catch (e) {}
actual = v101;
expect = "0,1,,";
try { addThis(); } catch (e) {}
let v105;
try { v105 = inSection(8); } catch (e) {}
status = v105;
let v107;
try { v107 = new Object(); } catch (e) {}
var obj = v107;
obj.sort = Array?.prototype?.sort;
obj.length = 4;
obj[0] = 0;
obj[1] = 1;
obj[2] = 2;
obj[3] = 3;
function f117(a118, a119) {
    return a118 - a119;
}
cmp = f117;
let v121;
try { v121 = obj.sort(cmp); } catch (e) {}
actual = v121?.length;
expect = 4;
try { addThis(); } catch (e) {}
let v125;
try { v125 = new Object(); } catch (e) {}
obj = v125;
obj.sort = Array?.prototype?.sort;
obj.length = 4;
obj[0] = 3;
obj[1] = 2;
obj[2] = 1;
obj[3] = 0;
function f133(a134, a135) {
    return a134 - a135;
}
cmp = f133;
try { obj.sort(cmp); } catch (e) {}
obj.join = Array?.prototype?.join;
let v141;
try { v141 = inSection(9); } catch (e) {}
status = v141;
let v142;
try { v142 = obj.join(); } catch (e) {}
actual = v142;
expect = "0,1,2,3";
try { addThis(); } catch (e) {}
let v146;
try { v146 = inSection(10); } catch (e) {}
status = v146;
actual = obj?.length;
expect = 4;
try { addThis(); } catch (e) {}
let v151;
try { v151 = inSection(11); } catch (e) {}
status = v151;
obj.length = 2;
let v153;
try { v153 = obj.join(); } catch (e) {}
actual = v153;
expect = "0,1";
try { addThis(); } catch (e) {}
let v157;
try { v157 = inSection(12); } catch (e) {}
status = v157;
obj.length = 4;
let v159;
try { v159 = obj.join(); } catch (e) {}
actual = v159;
expect = "0,1,2,3";
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
    for (let i170 = 0; i170 < UBound; i170++) {
        const v175 = expectedvalues?.[i170];
        const v176 = actualvalues?.[i170];
        const v177 = statusitems?.[i170];
        try { f0(v175, v176, v177); } catch (e) {}
    }
}
