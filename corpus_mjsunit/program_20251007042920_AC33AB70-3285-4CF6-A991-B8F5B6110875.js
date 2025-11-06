function f(a1, a2) {
    return a1 || Math.fround(a2);
}
f(0, 0);
f(268435455, 0);
