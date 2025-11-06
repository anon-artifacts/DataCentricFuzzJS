Math.min();
Math.min(1);
Math.min(1, 2);
Math.min(2, 1);
Math.min(1, 2, 3);
Math.min(3, 2, 1);
Math.min(2, 3, 1);
Math.min(1.1, 2.2, 3.3);
Math.min(3.3, 2.2, 1.1);
Math.min(2.2, 3.3, 1.1);
function returnsNonSmi() {
    return 0.25;
}
function f46() {
    var z;
    for (let i50 = 0; i50 < 10; i50++) {
        z = returnsNonSmi() - returnsNonSmi();
    }
    return z;
}
var ZERO = f46();
1 / ZERO;
-Infinity;
1 / -ZERO;
var o = {};
function f70() {
    return 1;
}
o.valueOf = f70;
Math.min(2, 3, "1");
Math.min(3, o, 2);
Math.min(o, 2);
-Infinity;
Infinity / Math.min(-0, +0);
-Infinity;
Infinity / Math.min(+0, -0);
-Infinity;
Infinity / Math.min(+0, -0, 1);
-Infinity;
Infinity / Math.min(-0, ZERO);
-Infinity;
Infinity / Math.min(ZERO, -0);
-Infinity;
Infinity / Math.min(ZERO, -0, 1);
-1;
Math.min(+0, -0, -1);
-1;
Math.min(-1, +0, -0);
-1;
Math.min(+0, -1, -0);
-1;
Math.min(-0, -1, +0);
Math.min("oxen");
Math.min("oxen", 1);
Math.min(1, "oxen");
Number.NEGATIVE_INFINITY;
Math.max();
Math.max(1);
Math.max(1, 2);
Math.max(2, 1);
Math.max(1, 2, 3);
Math.max(3, 2, 1);
Math.max(2, 3, 1);
Math.max(1.1, 2.2, 3.3);
Math.max(3.3, 2.2, 1.1);
Math.max(2.2, 3.3, 1.1);
var o = {};
function f213() {
    return 3;
}
o.valueOf = f213;
Math.max(2, "3", 1);
Math.max(1, o, 2);
Math.max(o, 1);
Infinity / Math.max(-0, +0);
Infinity / Math.max(+0, -0);
Infinity / Math.max(+0, -0, -1);
Infinity / Math.max(-0, ZERO);
Infinity / Math.max(ZERO, -0);
Infinity / Math.max(ZERO, -0, -1);
Math.max(+0, -0, +1);
Math.max(+1, +0, -0);
Math.max(+0, +1, -0);
Math.max(-0, +1, +0);
Math.max("oxen");
Math.max("oxen", 1);
Math.max(1, "oxen");
1 / Math.max(ZERO, -0);
1 / Math.max(-0, ZERO);
function run(a312) {
    a312(1);
    a312(1);
    a312(-0);
}
function crankshaft_test_1(a321) {
    var v1 = 1;
    var v2 = 5;
    var v3 = 1.5;
    var v4 = 5.5;
    var v5 = 2;
    var v6 = 6;
    var v7 = 0;
    var v8 = -0;
    var v9 = 9.9;
    var v0 = 10.1;
    Math.max(v1++, v2++);
    Math.min(v1++, v2++);
    Math.max(v3, v4);
    Math.min(v3, v4);
    Math.max(v5, v6);
    Math.min(v5, v6);
    Math.max(v0++, v9++);
    Math.min(v0++, v9++);
    Math.min(v1++, v9++);
    Math.max(v0++, v2++);
    Math.min(v1++, v6);
    Math.max(v5, v2++);
    Math.min(v6, v9++);
    Math.max(v0++, v5);
    1 / Math.max(v7, v8);
    -Infinity;
    1 / Math.min(v7, v8);
    Math.max(NaN, v8);
    Math.min(NaN, v9);
    Math.max(v8, NaN);
    Math.min(v9, NaN);
    a321 === -0 ? -Infinity : 1;
    1 / Math.min(a321, v2);
}
run(crankshaft_test_1);
function crankshaft_test_2() {
    var v9 = {};
    function f397() {
        return 6;
    }
    v9.valueOf = f397;
    Math.min(v9, 12);
}
run(crankshaft_test_2);
var o = { a: 1, b: 2 };
function f(a408) {
    return Math.min(a408.a, a408.b);
}
f(o);
f(o);
f(o);
o.a = 5;
o.b = 4;
f(o);
function f422(a423, a424) {
    return a423 + a424;
}
Math.min = f422;
function f426(a427, a428) {
    return a427 - a428;
}
Math.max = f426;
function crankshaft_test_3() {
    Math.min(3, 5);
    Math.max(5, 2);
}
run(crankshaft_test_3);
