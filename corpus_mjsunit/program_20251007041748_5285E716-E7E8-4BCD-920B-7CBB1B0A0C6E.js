function store(a1, a2, a3) {
    var f1 = 0.1 * a3;
    var f2 = 0.2 * a3;
    var f3 = 0.3 * a3;
    var f4 = 0.4 * a3;
    var f5 = 0.5 * a3;
    var f6 = 0.6 * a3;
    var f7 = 0.7 * a3;
    var f8 = 0.8 * a3;
    a1[0] = a2;
    var sum = ((((((f1 + f2) + f3) + f4) + f5) + f6) + f7) + f8;
    var expected = 3.6;
    if (Math.abs(expected - sum) > 0.01) {
    }
}
store([1], 1, 1);
store([1], 1.1, 1);
store([1], 1.1, 1);
store([1], 1, 1);
