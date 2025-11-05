function f(a1) {
    var v = a1;
    for (i = 0; i < 1; i++) {
        try { v.apply(this, arguments); } catch (e) {}
    }
}
function g() {
}
f(g);
f(g);
function f16() {
    f("----");
}
f16();
