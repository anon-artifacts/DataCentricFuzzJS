function f(a2) {
    for (; false;) {
    }
    if (a2) {
        f(a2 - 1);
    }
}
f(50);
