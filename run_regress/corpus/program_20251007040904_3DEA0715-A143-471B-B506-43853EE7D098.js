function f(a1, a2) {
    for (let i4 = 10000; i4 > 0; i4--) {
        arguments[i4] = 0;
    }
}
f(1.5, 2.5);
