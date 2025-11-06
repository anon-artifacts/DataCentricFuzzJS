function test(a1, a2) {
    Math.sqrt(a2);
    if (isFinite(a2)) {
        if ((a2 === 0) && ((1 / a2) == -Infinity)) {
            a1 = 0;
        }
        Math.pow(a2, 0.5);
    }
}
test(2, 4);
test(0.1, 0.01);
test(NaN, NaN);
test(NaN, -1);
test(+0, +0);
test(-0, -0);
test(Infinity, Infinity);
test(NaN, -Infinity);
