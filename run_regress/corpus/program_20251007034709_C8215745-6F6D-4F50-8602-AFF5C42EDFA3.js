check(-Infinity, Math.max(), "max()");
check(NaN, Math.max(NaN), "max(NaN)");
check(NaN, Math.max({}), "max({})");
const v15 = {};
check(NaN, Math.max(v15, {}), "max({}, {})");
check(NaN, Math.max({}, 42), "max({}, 42)");
check(0, Math.max(null), "max(null)");
check(0, Math.max(+0, -0), "max(+0,-0)");
check(0, Math.max(-0, +0), "max(-0,+0)");
check(0, Math.max(+0, -5, -0), "max(+0, -5, -0)");
check(0, Math.max(-0, -5, +0), "max(-0, -5, +0)");
check(2, Math.max.length, "max.length");
var values = [0,-0,-1,1,-2,2,3.14159,1000.123,536870911,-536870912,Infinity,-Infinity];
for (let i89 = 0; i89 < values.length; ++i89) {
    check(values[i89], Math.max(values[i89]), ("max(" + values[i89]) + ")");
    check(Infinity, Math.max(values[i89], Infinity), ("max(" + values[i89]) + ",  Infinity)");
    check(values[i89], Math.max(values[i89], -Infinity), ("max(" + values[i89]) + ", -Infinity)");
}
check(5, Math.max(5, 1, 2, 3, 4), "max is the first value");
check(5, Math.max(4, 1, 2, 3, 5), "max is the last value");
check(57000.4, Math.max(1.3, 1, 57000.4, 3, 4), "max is the first value");
check(30981503.7959, Math.max(30981503.7959, 30981503.795899995, 30981503.79589999, 30981503.795899987, 30981503.795899983, 30981503.79589998, 30981503.795899976, 30981503.795899972, 30981503.79589997, 30981503.795899965, 30981503.79589996, 30981503.795899957, 30981503.795899954, 30981503.79589995, 30981503.795899946, 30981503.795899943, 30981503.79589994, 30981503.795899935, 30981503.79589993, 30981503.795899928, 30981503.795899924, 30981503.79589992, 30981503.795899916, 30981503.795899913, 30981503.79589991, 30981503.795899905, 30981503.7958999, 30981503.795899898, 30981503.795899894, 30981503.79589989, 30981503.795899887, 30981503.795899883, 30981503.79589988, 30981503.795899875, 30981503.79589987, 30981503.795899868, 30981503.795899864, 30981503.79589986, 30981503.795899857, 30981503.795899853, 30981503.79589985, 30981503.795899846, 30981503.795899842, 30981503.79589984, 30981503.795899834, 30981503.79589983, 30981503.795899827, 30981503.795899823, 30981503.79589982, 30981503.795899816), "many values");
print(Number.POSITIVE_INFINITY);
print(Number.NEGATIVE_INFINITY);
var opD = +0;
var onD = -0;
var op = 1 / Number.POSITIVE_INFINITY;
var on = 1 / Number.NEGATIVE_INFINITY;
var infp = 1 / op;
var infn = 1 / on;
var infpD = 1 / +0;
var infnD = 1 / -0;
print((((((((((((((("opD = " + opD) + " , onD = ") + onD) + " op = ") + op) + " , on = ") + on) + " , infp = ") + infp) + " , infn = ") + infn) + " , infpD = ") + infpD) + " , infnD = ") + infnD);
print("Math.max(+0.0, -0.0) " + Math.max(+0, -0));
if ((1 / Math.max(+0, -0)) < 0) {
    print("Check (1 / Math.max(+0.0, -0.0) < 0)  - true ");
} else {
    print("Check (1 / Math.max(+0.0, -0.0) < 0)  - false ");
}
check(5, Math.max(5, Number.NEGATIVE_INFINITY), "max is not the negative infinity");
check(Number.POSITIVE_INFINITY, Math.max(5, Number.POSITIVE_INFINITY), "max is the positive infinity");
check(Number.POSITIVE_INFINITY, Math.max(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY), "max is the positive infinity");
print("done");
function check(a305, a306, a307) {
    if (isNaN(a306)) {
        if (a305.toString() !== a306.toString()) {
            print("fail: " + a307);
        }
    } else {
        if (a305 !== a306) {
            print("fail: " + a307);
        }
    }
}
function foo(a321, a322) {
    var c = Math.max(a321, a322);
    return 1 / c;
}
print(foo(-0, 0));
print(foo(-0, 0));
print(foo(0, -0));
print(foo(-0, -0));
function BLUE143505(a349, a350) {
    var c;
    if (Math.max(-4, undefined)) {
        c = false;
    }
    return c;
}
print(BLUE143505());
print(BLUE143505());
function findMaxInArray() {
    const v365 = new Array(3);
    var arr = v365;
    prop1 = 0;
    arr[1] = 1;
    arr[0] = 1;
    print(Math.max.apply(Math, arr));
    const t77 = Object.prototype;
    t77[2] = prop1;
}
findMaxInArray();
findMaxInArray();
