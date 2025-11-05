function f0() {
    var globalO;
    function polyvariant() {
        return globalO.func();
    }
    class C5 {
        func() {
            return 42;
        }
    }
    const v8 = new C5();
    var fooO = v8;
    function foo() {
        globalO = fooO;
        return polyvariant();
    }
    class C12 {
        func() {
            return foo();
        }
    }
    const v15 = new C12();
    var barO = v15;
    function bar() {
        globalO = barO;
        return polyvariant();
    }
    var count = 1000000;
    var result = 0;
    for (let i24 = 0; i24 < count; ++i24) {
        result += bar();
    }
    if (result != (count * 42)) {
        throw "Error: bad result: " + result;
    }
}
f0();
