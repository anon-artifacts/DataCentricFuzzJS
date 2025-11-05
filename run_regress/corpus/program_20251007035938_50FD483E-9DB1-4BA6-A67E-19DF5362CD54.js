function A() {
}
function f1() {
}
const t4 = A.prototype;
t4.f = f1;
function B() {
}
const v4 = new A();
var o = v4;
function g() {
    try {
        return o.f();
    } finally {
    }
}
function h() {
    g();
}
h();
const v11 = new B();
o = v11;
