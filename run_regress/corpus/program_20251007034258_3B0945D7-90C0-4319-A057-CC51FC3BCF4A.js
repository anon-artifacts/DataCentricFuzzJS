function f() {
    return /x/;
}
function g() {
    return f() == f();
}
for (let i7 = 0; i7 < 2; ++i7) {
    g();
}
