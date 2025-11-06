function dummy(a1) {
}
function g() {
    return g.arguments;
}
function f(a5) {
    var i = 0;
    var o = {};
    for (; i < a5; i++) {
        o.y = +o.y;
        g();
    }
}
f(1);
f(1);
dummy(f(1));
dummy(f(2));
