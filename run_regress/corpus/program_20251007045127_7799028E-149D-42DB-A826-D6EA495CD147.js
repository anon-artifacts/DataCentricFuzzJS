function f(a1) {
    const v3 = -1;
    const v5 = -2;
    const v7 = -5;
    switch (a1) {
        case v3:
            return 1;
        case v5:
            return 2;
        case v7:
            return 5;
        default:
            return 10;
    }
}
f(-1);
f(-2);
f(-5);
f(-3);
f(-6);
f(0);
f(1);
f(-2147483647);
f(-2147483648);
f(-2147483649);
f(2147483647);
f(2147483648);
f(2147483649);
