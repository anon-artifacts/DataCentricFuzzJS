function f0(a1) {
    return;
}
setter = f0;
var o = {};
Object.defineProperty(o, "foo", { set: setter });
var x = {};
Object.defineProperty(x, "foo", { set: setter });
x.bar = 20;
x = {};
gc();
o.foo = 20;
o.foo;
