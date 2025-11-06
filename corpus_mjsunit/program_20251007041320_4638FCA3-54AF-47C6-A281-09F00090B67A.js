function f(a1) {
    var o = { a: 0, b: 0 };
    if (a1 == 0) {
        o.a = 1;
    } else {
        if (a1 <= 1) {
            if (a1 == 2) {
                o.a = 2;
            } else {
                o.a = 1;
            }
            o.a = 2;
        } else {
            if (a1 == 2) {
                o.a = "x";
            } else {
                o.a = "x";
            }
            o.b = 22;
        }
        o.b = 22;
    }
    return o.a + 1;
}
f(0, 0);
f(1, 0);
f(2, 0);
f(3, 0);
f(0, 1);
f(1, 1);
f(2, 1);
f(3, 1);
f(2);
