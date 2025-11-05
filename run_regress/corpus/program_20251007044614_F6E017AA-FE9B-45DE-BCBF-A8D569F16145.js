const t0 = Array.prototype;
t0.push = 1;
const v4 = { value: 10 };
function f5() {
    return 42;
}
const v7 = { get: f5 };
var desc = { foo: v4, bar: v7 };
var obj = {};
var x = Object.defineProperties(obj, desc);
x.foo;
x.bar;
