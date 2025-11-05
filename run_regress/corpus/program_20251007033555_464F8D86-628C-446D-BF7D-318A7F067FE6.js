function g(a1) {
    return a1.length;
}
g("x");
g("xy");
g([1]);
g([1,2]);
function f() {
    g([]);
}
f();
f();
f();
