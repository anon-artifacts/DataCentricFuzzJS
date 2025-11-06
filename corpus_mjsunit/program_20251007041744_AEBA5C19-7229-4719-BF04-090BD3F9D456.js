function module(a1) {
    'use asm';
    var fr = a1.Math.fround;
    function foo() {
        var s = fr(10.5);
        var i = fr(20);
        var g = fr(30);
        var h = fr(42.42);
        var j = fr(19.5);
        var c = 125.5;
        i = fr(s - i);
        g = fr(g / s);
        c = +j;
        h = fr(s * h);
        return fr(fr((s = fr(+j)) + i) + fr(g + h));
    }
    return foo;
}
var x = module({ Math: Math });
print(x());
print(x());
