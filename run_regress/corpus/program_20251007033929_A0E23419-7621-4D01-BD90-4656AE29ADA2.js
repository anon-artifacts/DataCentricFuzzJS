function foo(a1) {
    return a1.foo1;
}
function getter() {
    return (this.x + this.z) + foo2(this);
}
function foo2(a14) {
    return a14.a;
}
var o1 = { z: 0, x: 1 };
var o2 = { z: 0, a: 1.5, x: 1 };
var o3 = { z: 0, a: 1.5 };
Object.defineProperty(o1, "foo1", { get: getter });
Object.defineProperty(o2, "foo1", { get: getter });
foo(o1);
foo(o1);
foo(o2);
foo2(o2);
foo2(o2);
foo2(o3);
foo(o1);
