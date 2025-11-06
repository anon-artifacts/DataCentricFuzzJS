function g(a1, a2) {
    a1 = +a1;
    if (a2) {
        a1 = undefined;
    }
    print(a1);
    return +a1;
}
g(0);
g(0);
Number.isNaN(g(0, true));
