function foo() {
    var a = [];
    var b = [];
    for (let i6 = 0; i6 < 1000; ++i6) {
        a.push(i6 + 1);
        b.push(i6 - 1);
    }
    for (let i19 = 0; i19 < 1000; ++i19) {
        for (let i26 = 0; i26 < a.length; ++i26) {
            a[i26] += b[i26];
        }
        for (let i34 = 0; i34 < a.length; ++i34) {
            a[i34] -= b[i34];
        }
    }
    var result = 0;
    for (let i44 = 0; i44 < a.length; ++i44) {
        result += a[i44];
    }
    return result;
}
if (foo() != 500500) {
    throw "ERROR";
}
