function f0() {
    function foo(a2) {
        return 1;
    }
    function bar(a5) {
        return a5;
    }
    var n = 1000000;
    function f8() {
        var f = foo;
        var g = bar;
        var result = 0;
        for (let i14 = 0; i14 < n; ++i14) {
            result += f(42);
            var tmp = f;
            f = g;
            g = tmp;
        }
        return result;
    }
    var result = f8();
    if (result != (((n / 2) * 42) + ((n / 2) * 1))) {
        throw "Error: bad result: " + result;
    }
}
f0();
