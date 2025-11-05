function f(a1, a2) {
    return (a2 | 0) && a1 ? a2 | 0 : 0;
}
m = [1];
f(m[0], m[0]);
f(m[1], m[0]);
f(m[2], m[0]);
