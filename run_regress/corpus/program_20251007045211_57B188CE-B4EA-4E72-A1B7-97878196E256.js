function bar(a1) {
    var a;
    if (a1 < 50) {
        a = a1;
    }
    return a;
}
function foo() {
    for (let i8 = 0; i8 < 100; i8++) {
        var q = bar(i8);
        if (i8 < 50) {
        } else {
        }
    }
}
foo();
