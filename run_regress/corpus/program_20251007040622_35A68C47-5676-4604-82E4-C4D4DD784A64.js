var v = { p: 0 };
function f4() {
    return 13;
}
v.__defineGetter__("p", f4);
function f() {
    v.foo = v;
    var boom = v;
    boom.foo;
}
f();
f();
f();
