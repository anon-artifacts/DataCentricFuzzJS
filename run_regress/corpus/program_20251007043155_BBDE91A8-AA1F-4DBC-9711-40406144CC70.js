function f0() {
    function foo(a2) {
        return 1 + this.f;
    }
    function bar(a8) {
        return a8 + this.f;
    }
    function baz(a13) {
        return (a13 + 1) + this.f;
    }
    var n = 1000000;
    const v22 = { f: 42 };
    function f23(a24) {
        var f = { fun: foo, f: 1 };
        var g = { fun: bar, f: 2 };
        var h = { fun: baz, f: 3 };
        var result = 0;
        for (let i37 = 0; i37 < n; ++i37) {
            if (i37 == (n - 1)) {
                f = h;
            }
            result += f.fun(a24.f);
            var tmp = f;
            f = g;
            g = tmp;
        }
        return result;
    }
    var result = f23(v22);
    if (result != ((((n / 2) - 1) * (42 + 2)) + (((n / 2) * (1 + 1)) + ((42 + 1) + 3)))) {
        throw "Error: bad result: " + result;
    }
}
f0();
