var isTrue = true;
function g(a3) {
    return a3;
}
function f() {
    return g.apply(null, isTrue ? ["happy"] : arguments);
}
for (let i12 = 0; i12 < 18; ++i12) {
    f("sad");
}
