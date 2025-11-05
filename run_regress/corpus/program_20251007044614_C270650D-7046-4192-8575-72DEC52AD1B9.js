function test0Runner() {
    var shouldBailout = 0;
    function test0() {
        var o = { prop0: 0 };
        var n = 0;
        var i = 0;
        while (i < 2) {
            while (o.prop0 < 0) {
                while (i + 1) {
                    o.prop0 = 0;
                }
            }
            if (shouldBailout) {
                delete o.prop0;
            }
            ++n;
            ++i;
        }
        print("test0: " + n);
    }
    test0();
    shouldBailout = 1;
    test0();
}
test0Runner();
function test1(a31, a32) {
    var c = 1.1;
    c += 0.1;
    a32 += 0.1;
    test1a(a32);
    var sum = -1;
    for (let i43 = 0; i43 < 2; ++i43) {
        var d;
        if (a31) {
            d = 2.2;
        } else {
            d = 2.3;
        }
        for (let i54 = 0; i54 < 2; ++i54) {
            if (i43 === 1) {
                sum += a31.d;
            }
        }
        test1a(a32);
        a32 = c;
        c = d;
        test1a(a32);
    }
    return sum;
    function test1a(a66) {
        try {
            print("test1: " + a66);
        } catch(e71) {
        }
    }
}
function test1Runner() {
    var o = { a: 0.1, b: 0.1, c: 0.1, d: 3.1 };
    print("test1: " + test1(o, 0.1));
    o.d = "4.1";
    print("test1: " + test1(o, 0.1));
}
test1Runner();
