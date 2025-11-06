function writeLine(a1) {
    const v2 = /\(PST\)/g;
    print(a1 = a1.replace(/\(PDT\)/g, "(Pacific Daylight Time)").replace(v2, "(Pacific Standard Time)"));
}
writeLine("Test 01:");
function test01() {
    const v14 = new Array();
    var o = v14;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test01();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test01();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test01();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
writeLine("");
writeLine("Test 02:");
var proto02 = { p: 1001, q: 1002 };
function test02() {
    const v133 = new Array(10);
    var o = v133;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test02();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test02();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test02();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
writeLine("");
writeLine("Test 03:");
var proto03 = { p: 1001, q: 1002 };
Array.prototype = proto03;
function test03() {
    const v251 = new Array();
    var o = v251;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test03();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test03();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test03();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
writeLine("");
writeLine("Test 04:");
function SimpleObject04() {
    this.a = 1;
    this.b = 2;
    this.c = 3;
}
var proto04 = { p: 1001, q: 1002 };
SimpleObject04.prototype = proto04;
Array = SimpleObject04;
function test04() {
    const v375 = new Array();
    var o = v375;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test04();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test04();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test04();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
writeLine("");
writeLine("Test 11:");
function test11() {
    const v489 = new Boolean();
    var o = v489;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test11();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test11();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test11();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
writeLine("");
writeLine("Test 12:");
var proto12 = { p: 1001, q: 1002 };
function test12() {
    const v608 = new Boolean(true);
    var o = v608;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test12();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test12();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test12();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
writeLine("");
writeLine("Test 13:");
var proto13 = { p: 1001, q: 1002 };
Boolean.prototype = proto13;
function test13() {
    const v726 = new Boolean();
    var o = v726;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test13();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test13();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test13();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
writeLine("");
writeLine("Test 14:");
function SimpleObject14() {
    this.a = 1;
    this.b = 2;
    this.c = 3;
}
var proto14 = { p: 1001, q: 1002 };
SimpleObject14.prototype = proto14;
Boolean = SimpleObject14;
function test14() {
    const v850 = new Boolean();
    var o = v850;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test14();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test14();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test14();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
writeLine("");
writeLine("Test 21:");
function test21() {
    const v964 = new Number();
    var o = v964;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test21();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test21();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test21();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
writeLine("");
writeLine("Test 22:");
var proto22 = { p: 1001, q: 1002 };
function test22() {
    const v1083 = new Number(0);
    var o = v1083;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test22();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test22();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test22();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
writeLine("");
writeLine("Test 23:");
var proto23 = { p: 1001, q: 1002 };
Number.prototype = proto23;
function test23() {
    const v1201 = new Number();
    var o = v1201;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test23();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test23();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test23();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
writeLine("");
writeLine("Test 24:");
function SimpleObject24() {
    this.a = 1;
    this.b = 2;
    this.c = 3;
}
var proto24 = { p: 1001, q: 1002 };
SimpleObject24.prototype = proto24;
Number = SimpleObject24;
function test24() {
    const v1325 = new Number();
    var o = v1325;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test24();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test24();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test24();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
writeLine("");
writeLine("Test 31:");
function test31() {
    const v1439 = new String();
    var o = v1439;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test31();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test31();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test31();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
writeLine("");
writeLine("Test 32:");
var proto32 = { p: 1001, q: 1002 };
function test32() {
    const v1558 = new String("text");
    var o = v1558;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test32();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test32();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test32();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
writeLine("");
writeLine("Test 33:");
var proto33 = { p: 1001, q: 1002 };
String.prototype = proto33;
function test33() {
    const v1676 = new String();
    var o = v1676;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test33();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test33();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test33();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
writeLine("");
writeLine("Test 34:");
function SimpleObject34() {
    this.a = 1;
    this.b = 2;
    this.c = 3;
}
var proto34 = { p: 1001, q: 1002 };
SimpleObject34.prototype = proto34;
String = SimpleObject34;
function test34() {
    const v1800 = new String();
    var o = v1800;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test34();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test34();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test34();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
writeLine("");
writeLine("Test 41:");
function test41() {
    const v1915 = new Date("2013/12/03");
    var o = v1915;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test41();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test41();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test41();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
writeLine("");
writeLine("Test 42:");
var proto42 = { p: 1041, q: 1042 };
Date.prototype = proto42;
function test42() {
    const v2034 = new Date("2013/12/03");
    var o = v2034;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test42();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test42();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test42();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
writeLine("");
writeLine("Test 43:");
function SimpleObject43() {
    this.a = 1;
    this.b = 2;
    this.c = 3;
}
var proto43 = { p: 1041, q: 1042 };
SimpleObject43.prototype = proto43;
Date = SimpleObject43;
function test43() {
    const v2158 = new Date();
    var o = v2158;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test43();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test43();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test43();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
writeLine("");
writeLine("Test 51:");
function test51() {
    const v2272 = new Object();
    var o = v2272;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test51();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test51();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test51();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
writeLine("");
writeLine("Test 52:");
var proto52 = { p: 1041, q: 1042 };
function test52() {
    const v2390 = new Object(proto52);
    var o = v2390;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test52();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test52();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test52();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
writeLine("");
writeLine("Test 53:");
var proto53 = { p: 1041, q: 1042 };
Object.prototype = proto53;
function test53() {
    const v2508 = new Object();
    var o = v2508;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test53();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test53();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test53();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
writeLine("");
writeLine("Test 54:");
function SimpleObject54() {
    this.a = 1;
    this.b = 2;
    this.c = 3;
}
var proto54 = { p: 1001, q: 1002 };
SimpleObject54.prototype = proto54;
Object = SimpleObject54;
function test54() {
    const v2632 = new Object();
    var o = v2632;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test54();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test54();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test54();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
writeLine("");
writeLine("Test 55:");
function SimpleObject55() {
    this.a = 1;
    this.b = 2;
    this.c = 3;
}
var proto55a = { p: 1041, q: 1042 };
var proto55b = { p: 1051, q: 1052 };
SimpleObject55.prototype = proto55a;
Object = SimpleObject55;
function test55() {
    const v2760 = new Object(proto55b);
    var o = v2760;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test55();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test55();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
o = test55();
writeLine(((((((((((((((("o = " + o) + " ({ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " })");
writeLine("");
