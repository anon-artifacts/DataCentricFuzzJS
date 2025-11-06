function f0() {
    class C1 {
    }
    const v2 = new C1();
    var foo = v2;
    class C4 {
    }
    const v5 = new C4();
    var bar = v5;
    for (let i8 = 0; i8 < 5000000; ++i8) {
        var o;
        if (i8 & 1) {
            o = foo;
        } else {
            o = bar;
        }
        if ((o instanceof C1) != !(!(i8 & 1))) {
            throw "Error: bad result at i = " + i8;
        }
    }
}
f0();
