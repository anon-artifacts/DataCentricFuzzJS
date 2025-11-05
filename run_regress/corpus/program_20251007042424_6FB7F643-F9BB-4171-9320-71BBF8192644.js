var dummy = { foo: "true" };
var a = { y: 0.5 };
a.y = 357;
var b = a.y;
var d;
function f() {
    d = 357;
    return { foo: b };
}
f();
f();
var x = f();
function g(a19) {
    return a19.foo.length;
}
g(dummy);
g(dummy);
g(x);
