var a = [];
var b = {};
function f5() {
    return "foo";
}
Object.defineProperty(a, "1", { get: f5 });
function f11() {
    return "bar";
}
function f13() {
    this.x = 42;
}
Object.defineProperty(b, "1", { get: f11, set: f13 });
a[1];
b[1];
b[1] = "foobar";
b[1];
b.x;
var desc = Object.getOwnPropertyDescriptor(b, "1");
desc["writable"];
desc["enumerable"];
desc["configurable"];
