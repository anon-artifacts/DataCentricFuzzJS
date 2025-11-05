function f() {
    var x = 0;
    var y = 0;
    x ^= undefined;
    x /= 1;
    y %= 1;
    y = 1;
    f();
    y = -2;
    x >>= 1;
    (((y + (y + (y + ((y ^ (x % 5)) + y)))) + (y + y)) >> y) + y;
}
try {
    f();
} catch(e27) {
}
