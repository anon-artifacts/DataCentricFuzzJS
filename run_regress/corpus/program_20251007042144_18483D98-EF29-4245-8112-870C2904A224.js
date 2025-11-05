function f(a1) {
    var a = a1;
    a = Number ? a | 0 : 0;
    a = a >>> 0;
    a = Math.imul(4294967297, a);
    a = a % 2;
    a = a | 0;
    return a;
}
f(0);
f(-1);
-1;
