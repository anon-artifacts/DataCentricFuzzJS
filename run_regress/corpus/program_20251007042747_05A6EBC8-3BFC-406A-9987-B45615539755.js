function f(a1) {
    var o1 = { a: 5 };
    var o2 = { b: 7, a: 9 };
    for (let i10 = 0; i10 < a1; ++i10) {
        var o = i10 % 2 ? o2 : o1;
        o.a = i10;
    }
    return (o1.a + ",") + o2.a;
}
f(5);
f(6);
