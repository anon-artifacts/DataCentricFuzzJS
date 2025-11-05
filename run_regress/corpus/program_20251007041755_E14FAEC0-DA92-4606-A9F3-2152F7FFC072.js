function nonEmptyStack2() {
    var a = 0;
    for (const v7 in { a: 1, b: 2, c: 3 }) {
        for (let i9 = 0; i9 < 10; i9++) {
            a += i9;
        }
    }
    return String(a);
}
nonEmptyStack2();
