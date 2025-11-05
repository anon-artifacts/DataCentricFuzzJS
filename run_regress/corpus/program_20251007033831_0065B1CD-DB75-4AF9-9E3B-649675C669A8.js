function f(a1, a2, a3, a4) {
    if (a1) {
        return;
    }
    var x = a3 ? true : "" + a3;
    if (!a3) {
        var dead = (a2 + 1) + 1;
        if (!a4) {
            x = dead;
        }
        if (x) {
            x = false;
        }
        if (a4) {
            x = false;
        }
    }
    return x + 1;
}
f(false, 5);
f(false, 6);
f(false, 7);
f(false, 8);
function g(a34, a35, a36) {
    return f(a34, "abc", a35, a36);
}
g(true);
g(true);
g(true);
g(true);
g(false);
