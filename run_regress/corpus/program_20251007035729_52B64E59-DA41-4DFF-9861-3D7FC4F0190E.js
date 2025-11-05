function Module(a1) {
    'use asm';
    var max = a1.Math.max;
    var fround = a1.Math.fround;
    function f(a9, a10) {
        return +max(a9 = +a9, a10 = +a10);
    }
    function g(a16, a17) {
        a16 = a16 | 0;
        a17 = a17 | 0;
        return max(a16 >> 0, a17 >> 0) | 0;
    }
    function h(a30, a31) {
        return fround(max(a30 = fround(a30), a31 = fround(a31)));
    }
    return { f: f, g: g, h: h };
}
var m = Module({ Math: Math });
var f = m.f;
var g = m.g;
var h = m.h;
isNaN(f(0, NaN));
isFinite(f(0, Infinity));
isFinite(f(0, -Infinity));
Object.is(+0, f(-0, +0));
Object.is(+0, f(+0, -0));
f(0, 0.1);
f(0.1, 0.5);
f(0.5, -0.1);
-0.1;
f(-0.1, -0.5);
f(-0.5, 1);
f(1, 1.1);
f(1.1, -1);
-1;
f(-1, -1.1);
f(-1.1, 0);
g(0, 1);
g(1, 5);
g(5, -1);
-1;
g(-1, -5);
g(-5, 1);
g(1, -1);
g(-1, 0);
Math.fround(0.1);
h(0, 0.1);
Math.fround(0.5);
h(0.1, 0.5);
Math.fround(0.5);
h(0.5, -0.1);
Math.fround(-0.1);
h(-0.1, -0.5);
Math.fround(1);
h(-0.5, 1);
Math.fround(1.1);
h(1, 1.1);
Math.fround(1.1);
h(1.1, -1);
Math.fround(-1);
h(-1, -1.1);
Math.fround(0);
h(-1.1, 0);
g(0, Number.MIN_SAFE_INTEGER);
g(0, Number.MAX_SAFE_INTEGER);
Number.MAX_VALUE;
f(Number.MIN_VALUE, Number.MAX_VALUE);
Number.MAX_VALUE;
f(Number.MAX_VALUE, Number.MIN_VALUE);
Number.POSITIVE_INFINITY;
f(Number.POSITIVE_INFINITY, 0);
f(Number.NEGATIVE_INFINITY, 0);
