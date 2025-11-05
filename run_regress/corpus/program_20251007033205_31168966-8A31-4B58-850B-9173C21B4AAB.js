function f1(a1) {
    return 1 + f2(1, f3(a1), a1);
}
function f2(a10, a11, a12) {
    return a11;
}
function f3(a14) {
    return 2;
}
f1(false);
f1(false);
f1(true);
