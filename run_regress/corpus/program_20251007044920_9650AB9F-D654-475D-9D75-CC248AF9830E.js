function f(a1) {
    var a = [];
    function g() {
        return x;
    }
    for (let i7 = 0; i7 < a1; ++i7) {
        var x = i7;
        a[i7] = g;
        g();
    }
    return a;
}
var a = f(3);
a.length;
a[0]();
a[1]();
a[2]();
