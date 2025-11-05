function f2(a3, a4) {
    return a4;
}
try { f2.toSource(); } catch (e) {}
function f6(a7, a8) {
    return a8;
}
switch (96) {
    default:
        const t9 = 7;
        t9.valueOf = f6;
        break;
}
