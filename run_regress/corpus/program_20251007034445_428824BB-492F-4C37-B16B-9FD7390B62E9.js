var o = {};
o.x = 42;
function f4() {
    return o.x;
}
o.__defineGetter__("0", f4);
o.x;
o[0];
o.x;
const t5 = o.__lookupGetter__("0");
t5();
function f14(a15) {
    o.x = a15;
}
o.__defineSetter__("0", f14);
o.x;
o[0];
o.x;
const t14 = o.__lookupGetter__("0");
t14();
o[0] = 21;
o.x;
const t21 = o.__lookupSetter__(0);
t21(7);
o.x;
function Pair(a33, a34) {
    this.x = a33;
    this.y = a34;
}
function f38() {
    return this.x;
}
Pair.prototype.__defineGetter__("0", f38);
function f44() {
    return this.y;
}
Pair.prototype.__defineGetter__("1", f44);
function f50(a51) {
    this.x = a51;
}
Pair.prototype.__defineSetter__("0", f50);
function f56(a57) {
    this.y = a57;
}
Pair.prototype.__defineSetter__("1", f56);
const v63 = new Pair(2, 3);
var p = v63;
p[0];
p[1];
p.x = 7;
p[1] = 8;
p[0];
p.x;
p[1];
p.y;
var expected = {};
var actual = {};
for (let i84 = 0; i84 < 10; i84++) {
    actual[i84] = i84;
    expected[i84] = i84;
}
function testArray() {
    for (let i92 = 0; i92 < 10; i92++) {
        expected[i92];
        actual[i92];
    }
}
actual[1000000] = -1;
testArray();
testArray();
function f105() {
    return expected[0];
}
actual.__defineGetter__("0", f105);
expected[0] = 42;
testArray();
expected[0] = 111;
testArray();
var q = {};
function f115() {
    return 42;
}
q.__defineGetter__("0", f115);
var q1 = {};
function f122() {
    q1.b = 17;
}
q1.__defineSetter__("0", f122);
q1[0];
q1[0] = 3;
q1[0];
q1.b;
function f132() {
}
a = f132;
function f135() {
}
this.__defineSetter__("0", f135);
a |= "";
if ("") {
}
this[a];
