function f(a1) {
    if (a1 != "x") {
        const v7 = (a1 + 1) * 1.5;
        var o = { a: v7 };
        return o.a;
    }
}
f(1.5);
f(2.5);
f(NaN);
function g(a18) {
    f("" + a18);
}
g("x");
g("x");
g("x");
