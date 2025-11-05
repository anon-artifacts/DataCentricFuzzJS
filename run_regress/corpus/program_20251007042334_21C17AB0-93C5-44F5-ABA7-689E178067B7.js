function f(a1, a2) {
    return a1;
}
var a = 3.3;
a ? f(f(1, 2), 3) : a;
