function f(a1) {
    const v6 = -2147483644;
    switch (a1 | 0) {
        case 0:
        case 1:
        case 2:
        case v6:
        case 2147483647:
            return a1 + 1;
    }
    return 0;
}
f(0);
f(1);
f(2);
