function foo() {
    var o = { a: 5 };
    for (let i5 = 0; i5 < 100; ++i5) {
        o.a = 5;
        o.a = 7;
    }
}
foo();
foo();
foo();
