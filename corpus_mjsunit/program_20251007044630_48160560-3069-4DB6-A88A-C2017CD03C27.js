function f0() {
    function foo(a2) {
        return 1;
    }
    function bar(a5) {
        return a5;
    }
    function baz(a7) {
        return a7 + 1;
    }
    var n = 1000000;
    const v13 = { f: 42 };
    function f14(a15) {
        var f = foo;
        var g = bar;
        var h = baz;
        var result = 0;
        for (let i22 = 0; i22 < n; ++i22) {
            if (i22 == (n - 1)) {
                f = h;
            }
            result += f(a15.f);
            var tmp = f;
            f = g;
            g = tmp;
        }
        return result;
    }
    var result = f14(v13);
    if (result != (((((n / 2) - 1) * 42) + ((n / 2) * 1)) + (42 + 1))) {
        throw "Error: bad result: " + result;
    }
}
f0();
