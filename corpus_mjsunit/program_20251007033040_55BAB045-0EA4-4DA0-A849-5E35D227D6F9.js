function f(a1, a2, a3) {
    if ((a1 == 0) || (a2 == 0)) {
        return a1;
    }
    return a1 + a3;
}
f(0, 0, 0);
f(0, 1, 0);
f(1, 0, 0);
f(2, 1, 0);
f(1, 1, 0.5);
f(2, 1, 0.5);
