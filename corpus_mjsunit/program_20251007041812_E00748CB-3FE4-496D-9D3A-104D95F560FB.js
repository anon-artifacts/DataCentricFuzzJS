function f(a1) {
    var x1 = Math.max(-2147483649 >> 0, a1 >>> 0);
    var x2 = x1 | 0;
    return x2 >= 0 ? 1 : 0;
}
f(0);
f(-1);
