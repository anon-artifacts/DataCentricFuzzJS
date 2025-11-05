function f() {
    var n = a.length;
    for (let i5 = 0; i5 < n; i5++) {
    }
    for (let i11 = 0; i11 < n; i11++) {
    }
}
var a = "xxxxxxxxxxxxxxxxxxxxxxxxx";
while (a.length < 100000) {
    a = a + a;
}
f();
