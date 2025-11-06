function Test() {
    this.a = 0;
    this.b = 1;
    this.c = 2;
    this.d = 3;
}
function f9() {
    this.a = this.b;
}
const t9 = Test.prototype;
t9.test0 = f9;
function f14() {
    const v16 = this.c;
    this.b = v16;
    this.a = v16;
}
const t16 = Test.prototype;
t16.test1 = f14;
function f20() {
    this.c = this.d;
    this.b = this.c;
    this.a = this.b;
}
const t23 = Test.prototype;
t23.test2 = f20;
const v31 = new Test();
var t = v31;
t.test0();
t.a;
t.test1();
t.a;
t.b;
t.test2();
t.a;
t.b;
t.c;
