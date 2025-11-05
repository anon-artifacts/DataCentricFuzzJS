function g() {
    f(0);
}
function f(a5) {
    return undefined <= a5;
}
try {
    g();
} catch(e9) {
}
function f10() {
    const v11 = f();
    try { v11(); } catch (e) {}
}
f10();
