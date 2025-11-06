function f(a1) {
    var v = 0;
    for (let i5 = 0; i5 < 10; i5++) {
        var a = a1.x;
        var b = (a1 = a1.y).x;
        v += a + b;
    }
    return v;
}
const v18 = new Object();
var o = v18;
o.x = -1;
var a = o;
for (let i24 = 0; i24 < 10; i24++) {
    const v30 = new Object();
    o.y = v30;
    o = o.y;
    o.x = i24;
}
o.y = a;
print(f(a) == 80 ? "PASS" : "FAIL");
