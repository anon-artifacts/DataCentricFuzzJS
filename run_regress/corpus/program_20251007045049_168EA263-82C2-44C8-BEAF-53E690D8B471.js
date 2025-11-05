function g() {
    return 23;
}
function h() {
    return 42;
}
function boom(a5) {
    a5.g = h;
}
function f(a7) {
    if (a7) {
        for (let i9 = 0; i9 < 3; ++i9) {
        }
        f(false);
        boom(this);
        var x = g();
        return x;
    }
    return 65;
}
f(false);
f(false);
f(true);
