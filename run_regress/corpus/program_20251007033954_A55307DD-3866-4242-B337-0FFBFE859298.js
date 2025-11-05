function g() {
}
g();
function f(a3, a4) {
    var x;
    if (a3) {
        x = 12;
        print(a3);
        x = a3 + 19;
    } else {
        x = 20 + a3;
        a4(a3);
        x += a3;
    }
    return (a3 + x) + 12;
}
f(0, g);
