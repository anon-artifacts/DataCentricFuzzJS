function foo0(a1, a2) {
    (a1 == 10) && a2++;
    if (a1) {
    } else {
        print("FAILED");
    }
}
foo0(9, 0);
function foo1() {
    var o = { p: 0 };
    var a = 0;
    for (let i20 = 0; i20 < 2; ++i20) {
        a = 1;
        const v29 = o.p && 1;
        a /= 2;
        if (v29 || 2) {
            break;
        }
    }
}
foo1();
foo1();
function foo2() {
    const v37 = new Array(10);
    var ary = v37;
    var c = -1;
    var e = 1;
    var g = 1;
    ary[ary.length - 1] = 1;
    ary.length = 100;
    if (g = (e < c) || (g < c)) {
        c = e < c;
    }
    c = (e < c) + g;
    ary[ary.length - 1];
}
foo2();
foo2();
foo2();
print("Passed");
