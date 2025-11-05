function setUp(a1, a2) {
    a2.foo0 = 1;
    Object.setPrototypeOf(a1, {});
    const v7 = Object.getPrototypeOf(a1);
    Object.defineProperty(v7, "foo1", { writable: false, value: "bar" });
}
function f() {
    var obj0 = {};
    obj1 = Object.create(obj0);
    setUp(obj0, obj1);
    obj1.foo2 = "bar";
}
f();
print("Pass");
