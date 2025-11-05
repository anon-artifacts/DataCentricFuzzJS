function f() {
    return f.arguments;
}
function g(a3) {
    var o = { x: 2 };
    f();
    o.x = 1;
    a3 + 0;
    return o.x;
}
g(0);
g(0);
g({});
