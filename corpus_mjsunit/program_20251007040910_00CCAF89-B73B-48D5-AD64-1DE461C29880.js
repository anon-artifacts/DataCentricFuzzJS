called = 0;
function foo() {
    this.what();
    this.random = 0;
    this.what = 1;
}
function f9() {
    called = 1;
}
const t9 = foo.prototype;
t9.what = f9;
new foo();
