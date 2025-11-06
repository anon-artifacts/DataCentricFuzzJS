const v1 = Object.prototype;
function f3() {
    return 123;
}
Object.defineProperty(v1, "foo", { get: f3 });
function bar(a8) {
    a8.foo += 42;
    let v10 = a8.foo;
    v10++;
}
var baz = {};
bar(baz);
bar(baz);
bar(baz);
