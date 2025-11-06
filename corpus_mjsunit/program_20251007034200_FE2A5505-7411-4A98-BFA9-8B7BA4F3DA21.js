function f0() {
    function foo(a2) {
        return 1;
    }
    function bar(a5) {
        return a5;
    }
    var f = foo;
    var g = bar;
    var result = 0;
    var n = 100000;
    for (let i13 = 0; i13 < n; ++i13) {
        result += f(42);
        var tmp = f;
        f = g;
        g = tmp;
    }
    if (result != (((n / 2) * 42) + ((n / 2) * 1))) {
        throw "Error: bad result: " + result;
    }
}
f0();
