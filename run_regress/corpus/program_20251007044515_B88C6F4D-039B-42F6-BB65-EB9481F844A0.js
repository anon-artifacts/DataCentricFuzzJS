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
    const v8 = new Bar();
    var o = v8;
    const v10 = new Baz();
    var p = v10;
    var n = 1000000;
    var result = 0;
    for (let i17 = 0; i17 < n; ++i17) {
        result += o.f;
        var tmp = o;
        o = p;
        p = tmp;
    }
    if (result != (n * 42)) {
        throw "Error: bad result: " + result;
    }
}
f0();
