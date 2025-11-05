function f(a2) {
    if (a2 == 1) {
        return 42;
    } else {
        return f(1);
    }
}
var g = f(0);
