function A() {
    this.a = 77;
    this.b = 88;
}
function B() {
}
const v6 = new A();
B.prototype = v6;
function C() {
}
const v8 = new B();
C.prototype = v8;
function f() {
    const v10 = new C();
    var o = v10;
    var z;
    for (let i15 = 0; i15 < 5; ++i15) {
        z = o.a;
    }
}
f();
