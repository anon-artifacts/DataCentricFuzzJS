var a = 1;
const t1 = a.__proto__;
t1.f = 1;
function f4() {
    return 1;
}
const t6 = a.__proto__;
t6.f = f4;
function B() {
}
function f8() {
    return 2;
}
B.prototype = { f: f8 };
const v11 = new B();
var b = v11;
function C() {
}
function f15() {
    return 3;
}
C.prototype = { g: "foo", f: f15 };
const v18 = new C();
var c = v18;
function crash(a21) {
    return a21.f();
}
for (let i24 = 0; i24 < 2; i24++) {
    crash(a);
    crash(b);
    crash(c);
}
crash(a);
