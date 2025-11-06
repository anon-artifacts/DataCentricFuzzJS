function f(a1) {
    return (a1 >>> 0) !== Math.imul(1, a1 >>> 0);
}
f(0);
f(-1);
function g(a17) {
    return (2147483647 + a17) !== Math.imul(1, 2147483647 + a17);
}
g(0);
g(1);
function h(a32) {
    if ((2147483647 + a32) !== Math.imul(1, 2147483647 + a32)) {
        return true;
    }
    return (2147483647 + a32) | 0;
}
h(0);
h(1);
function i2(a52) {
    return a52 === a52;
}
function i(a55) {
    return i2(0 / Math.sign(a55 > 0));
}
i(1);
i(-1);
