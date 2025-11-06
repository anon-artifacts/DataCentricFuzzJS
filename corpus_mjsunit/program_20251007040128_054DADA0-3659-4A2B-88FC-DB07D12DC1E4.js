function reportCompare(a1, a2, a3) {
}
function f() {
    f(f, 2474, 2480, f);
}
try {
    reportCompare("outer", f(), "Inner function statement should not have been called.");
} catch(e12) {
}
