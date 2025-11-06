function t1() {
}
thisValue = {};
var f1 = t1.bind(thisValue);
f1();
f1();
function t2() {
    try { bailout(); } catch (e) {}
}
var f2 = t2.bind(thisValue);
try { f2(); } catch (e) {}
try { f2(); } catch (e) {}
function test3() {
    function i3(a19, a20, a21, a22) {
        try { bailout(); } catch (e) {}
    }
    function t3(a26, a27, a28, a29) {
        try { i3(a26, a27, a28, a29); } catch (e) {}
    }
    var f3 = t3.bind(thisValue);
    for (let i34 = 0; i34 < 10; i34++) {
        f3(1, 2, 3, 4);
        f3(1, 2, 3, 4);
    }
}
test3();
test3();
function test4() {
    this.a = 1;
    function f55(a56, a57, a58, a59) {
        try { bailout(); } catch (e) {}
    }
    var inner = f55;
    function f63(a64, a65, a66, a67) {
        this.a;
        try { inner(a64, a65, a66, a67); } catch (e) {}
        this.a;
    }
    var t = f63;
    var f = t.bind(thisValue);
    for (let i79 = 0; i79 < 5; i79++) {
        var res = f(1, 2, 3, 4);
        const v95 = new f(1, 2, 3, 4);
        var res2 = v95;
        res2 == undefined;
    }
}
test4();
test4();
function test5() {
    this.a = 1;
    function f106(a107, a108, a109, a110) {
        try { bailout(); } catch (e) {}
    }
    var inner = f106;
    function f122(a123, a124, a125, a126) {
        try { inner(a123, a124, a125, a126); } catch (e) {}
    }
    var t = f122;
    var f = t.bind(thisValue, 1, 2, 3);
    for (let i135 = 0; i135 < 5; i135++) {
        f(1, 2, 3, 4);
    }
}
test5();
test5();
function test6() {
    function i6(a150, a151, a152, a153) {
        if (a150 == 1) {
            try { bailout(); } catch (e) {}
        }
    }
    function t6(a159, a160, a161, a162) {
        try { i6(a159, a160, a161, a162); } catch (e) {}
    }
    var f6 = t6.bind(thisValue, 1);
    f6(1, 2, 3, 4);
    f6(0, 2, 3, 4);
}
test6();
test6();
