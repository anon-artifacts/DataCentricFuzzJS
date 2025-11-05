function foo(a1, a2) {
    for (let i4 = 0; i4 < a1.length; i4++) {
        a1[i4];
        if (i4 < 20) {
            a2[i4 + 1] = 0;
        }
    }
}
var q = Array(1, 2, 3, 4, 5);
foo(q, []);
