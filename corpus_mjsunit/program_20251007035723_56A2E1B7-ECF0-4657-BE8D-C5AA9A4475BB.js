function f0(a1) {
    return f0;
}
function f2() {
    f0.arguments.length;
    (3 && 14) && f0;
}
try { f2(); } catch (e) {}
