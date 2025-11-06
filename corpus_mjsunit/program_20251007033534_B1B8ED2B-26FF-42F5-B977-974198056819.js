function f() {
    var o = { a: 555 };
    for (let i5 = 0; i5 < 10; ++i5) {
        const v12 = 100 + i5;
        o.a = v12;
        var i = v12;
        100 + i5;
    }
}
f();
