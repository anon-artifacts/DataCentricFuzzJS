var BUGNUMBER = 909602;
var summary = "Array.prototype.pop shouldn't touch elements greater than length on " + "non-arrays";
print((BUGNUMBER + ": ") + summary);
function doTest(a12, a13) {
    Array.prototype.pop.call(a12);
    a13 in a12;
    a12[a13];
}
function testPop1() {
    var obj = { length: 2, 3: 42 };
    doTest(obj, 3);
}
for (let i31 = 0; i31 < 50; i31++) {
    testPop1();
}
function testPop2() {
    var obj = { length: 0, 3: 42 };
    doTest(obj, 3);
}
for (let i46 = 0; i46 < 50; i46++) {
    testPop2();
}
function testPop3() {
    var obj = { length: 2, 55: 42 };
    doTest(obj, 55);
}
for (let i61 = 0; i61 < 50; i61++) {
    testPop3();
}
function testPop4() {
    var obj = { length: 0, 55: 42 };
    doTest(obj, 55);
}
for (let i76 = 0; i76 < 50; i76++) {
    testPop4();
}
function testPop5() {
    var obj = { length: 2, 65530: 42 };
    doTest(obj, 65530);
}
for (let i91 = 0; i91 < 50; i91++) {
    testPop5();
}
function testPop6() {
    var obj = { length: 0, 65530: 42 };
    doTest(obj, 65530);
}
for (let i106 = 0; i106 < 50; i106++) {
    testPop6();
}
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
