function f() {
    var o = { a: 5 };
    for (let i5 = 0; i5 < 5; ++i5) {
        o.a = i5;
    }
    o.a;
}
f();
