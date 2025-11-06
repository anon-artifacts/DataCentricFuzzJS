function fib(a1) {
    var f0 = 0;
    var f1 = 1;
    for (; a1 > 0; a1 = a1 - 1) {
        var f2 = f0 + f1;
        f0 = f1;
        f1 = f2;
    }
    return f0;
}
fib(75);
