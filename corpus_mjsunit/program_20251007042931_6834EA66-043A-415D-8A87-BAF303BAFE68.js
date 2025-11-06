var a = 2;
function getprop_inner(a3) {
    var o = { a: 5 };
    var t = this;
    var x = 0;
    for (let i12 = 0; i12 < 20; i12++) {
        t = this;
        const v24 = (o.a + a3.a) + this.a;
        x += v24 + t.a;
    }
    return x;
}
function getprop() {
    return getprop_inner({ a: 9 });
}
getprop();
