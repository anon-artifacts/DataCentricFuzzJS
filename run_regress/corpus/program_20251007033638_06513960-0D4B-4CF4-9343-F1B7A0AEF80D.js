function g(a1, a2) {
    return a1 | a2;
}
function f(a5) {
    if (a5) {
        var s = g("a", "b") && true;
        return s;
    }
}
g(1, 2);
g(1, 2);
f(0);
f(0);
f(1);
