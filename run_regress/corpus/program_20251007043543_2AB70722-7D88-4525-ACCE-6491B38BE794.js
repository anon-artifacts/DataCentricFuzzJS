function foo(a1, a2, a3) {
    var res = 0;
    for (let i7 = 0; i7 < a3; i7++) {
        res += a1[i7];
    }
    return res;
}
foo([1,2,3], 0, 10);
