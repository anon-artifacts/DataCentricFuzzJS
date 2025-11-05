function f() {
    var res = 0;
    for (let i4 = 0; i4 < 100; i4++) {
        var s = "test" + i4;
        res += s.length;
        s[0];
        s[3];
        if (i4 > 90) {
            s[4];
        }
    }
    return res;
}
f();
