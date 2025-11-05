function f(a1, a2) {
    return g("c", "d");
}
function g(a8, a9) {
    g.constructor.apply(this, arguments);
}
function f14(a15, a16) {
    'c';
}
g.constructor = f14;
f("a", "b");
f("a", "b");
f("a", "b");
g.x = "deopt";
f("a", "b");
