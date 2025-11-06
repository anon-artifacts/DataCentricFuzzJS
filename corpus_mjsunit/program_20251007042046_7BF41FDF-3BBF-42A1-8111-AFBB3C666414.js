function foo() {
    const v2 = -1.5;
    var a = { b: v2 };
    for (let i6 = 0; i6 < 1; i6++) {
        a.b = 1;
    }
    0 <= a.b;
}
foo();
foo();
foo();
