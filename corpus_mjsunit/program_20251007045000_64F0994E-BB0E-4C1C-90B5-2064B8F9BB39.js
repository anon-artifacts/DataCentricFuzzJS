function g(a1) {
    return { a: a1, b: 42, c: a1 };
}
function f() {
    const v5 = {};
    var o = { a: v5, b: 43 };
    o.a = g(g(o));
    o.c = o.a.c;
    return o.c.a.c.a.c.a.c.b;
}
f();
f();
f();
