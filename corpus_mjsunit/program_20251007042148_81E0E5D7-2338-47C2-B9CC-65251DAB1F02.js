const v1 = Object.prototype;
function f3() {
    Object.defineProperty(this, "foo", { value: "new prop" });
    return "old prop";
}
const v10 = { configurable: true, get: f3 };
var a = Object.create(v1, { foo: v10 });
var b = Object.create(a);
print(b.foo);
print(b.foo);
const v21 = Object.prototype;
function f23() {
    Object.defineProperty(this, "foo", { value: "new prop" });
    return "old prop";
}
const v30 = { configurable: true, get: f23 };
var c = Object.create(v21, { foo: v30 });
var d = Object.create(c);
d.x = 123;
print(d.foo);
print(d.foo);
const v41 = Object.prototype;
function f43() {
    Object.defineProperty(y, "foo", { value: "new prop" });
    return "old prop";
}
const v50 = { configurable: true, get: f43 };
var x = Object.create(v41, { foo: v50 });
var y = Object.create(x);
var z = Object.create(y);
print(z.foo);
print(z.foo);
const v62 = Object.prototype;
function f64() {
    Object.defineProperty(this, "foo", { value: "new prop" });
    return "old prop";
}
const v71 = { configurable: true, get: f64 };
var e = Object.create(v62, { foo: v71 });
print(e.foo);
print(e.foo);
