function f(a1) {
    var x = a1;
    var y = x;
    x << y;
    a1 << a1;
    y << x;
    a1 << a1;
}
f(2);
