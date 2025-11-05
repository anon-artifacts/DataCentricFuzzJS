function foo() {
    var a = bar.arguments;
    if (a.length != 0) {
    }
    for (let i8 = 0; i8 < 100; ++i8) {
        if (a[i8] !== void 0) {
        }
    }
}
function bar() {
    foo();
}
bar();
bar(1);
bar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
