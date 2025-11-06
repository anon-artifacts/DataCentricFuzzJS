function Test() {
    var left = "XXX";
    var right = "YYY";
    for (let i6 = 0; i6 < 3; i6++) {
        var cons = left + right;
        var substring = cons.substring(2, 4);
        try {
            with ({ Test: i6 }) {
                continue;
            }
        } finally {
        }
    }
    return substring;
}
Test();
