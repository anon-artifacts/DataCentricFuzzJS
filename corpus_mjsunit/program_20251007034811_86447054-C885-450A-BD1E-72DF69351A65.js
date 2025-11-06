function f() {
    const v2 = new Object();
    var o = v2;
    o.i = 0;
    var ret = 0;
    for (let i8 = 0; i8 < 10; i8++) {
        if ((i8 % 2) == 0) {
            var j = o.i;
            o.i = i8;
            var k = o.i;
            ret += j + k;
        } else {
            o.i = ret;
        }
    }
    return ret;
}
var x = f();
if (x == 52) {
    print("PASS");
} else {
    print("FAIL: got " + x);
}
