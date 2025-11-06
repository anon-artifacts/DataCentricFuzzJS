function foo(a1) {
    for (let i3 = 2147483632; i3 <= a1; i3++) {
        var y = i3 % -2147483648;
    }
    return y + 5;
}
foo(2147483647);
2147483647 + 5;
