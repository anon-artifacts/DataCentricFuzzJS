function Foo() {
}
function f1() {
    print("yes hello");
    return 5;
}
const t6 = Foo.prototype;
t6.bar = f1;
const v7 = new Foo();
var x = v7;
function f(a10) {
    for (let i12 = 0; i12 < 41; i12++) {
    }
    a10.bar();
}
f(x);
