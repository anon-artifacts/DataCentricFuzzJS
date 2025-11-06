function f0() {
    function Foo() {
    }
    const t3 = Foo.prototype;
    t3.f = 42;
    function Bar() {
    }
    const v5 = new Foo();
    Bar.prototype = v5;
    function Baz() {
    }
    const v7 = new Foo();
    Baz.prototype = v7;
    function foo(a9, a10) {
        var n = 1000000;
        var result = 0;
        for (let i16 = 0; i16 < n; ++i16) {
            result += a9.f;
            var tmp = a9;
            a9 = a10;
            a10 = tmp;
        }
        if (result != (n * 42)) {
            throw "Error: bad result: " + result;
        }
    }
    const v28 = new Bar();
    const v29 = new Baz();
    foo(v28, v29);
}
f0();
