function Foo() {
}
const t2 = Foo.prototype;
t2.x = 0;
function foo(a4) {
    a4.x = 1;
}
const v6 = new Foo();
foo(v6);
const v8 = new Foo();
foo(v8);
const v10 = new Foo();
foo(v10);
Foo.prototype.x;
