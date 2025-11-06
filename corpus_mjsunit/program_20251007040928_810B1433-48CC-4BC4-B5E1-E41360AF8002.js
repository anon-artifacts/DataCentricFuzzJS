function foo(a1, a2) {
    for (let i4 = 0; i4 < 1; i4++) {
        a2 = Math.min(a2, i4);
    }
    m = Math.floor((a1 | 0) / a2);
}
foo(0, 1);
foo(0, 1);
foo(0, 1);
