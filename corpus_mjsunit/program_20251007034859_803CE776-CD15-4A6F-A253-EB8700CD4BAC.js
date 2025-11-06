function f0() {
    function Foo() {
    }
    const t3 = Foo.prototype;
    t3.f = 42;
    function Bar() {
    }
    const v5 = new Foo();
    Bar.prototype = v5;
    function foo(a7, a8) {
        var n = 1000000;
        var result = 0;
        for (let i14 = 0; i14 < n; ++i14) {
            result += a7.f;
            var tmp = a7;
            a7 = a8;
            a8 = tmp;
        }
        if (result != (n * 42)) {
            throw "Error: bad result: " + result;
        }
    }
    const v26 = new Bar();
    var o = v26;
    const v28 = new Bar();
    var p = v28;
    p.g = 43;
    foo(o, p);
}
f0();
