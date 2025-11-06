function g() {
    function f(a2) {
        a2 = +a2;
        var infinity = 0;
        var three = 0;
        var nan = 0;
        var result = 0;
        return (result = ~(~((nan = (infinity = 1 / 0) % (three = a2 + 2)) + 42))) | 0;
    }
    return f;
}
g = g();
var x;
for (i = 0; i < 20000; ++i) {
    x = g(1);
}
