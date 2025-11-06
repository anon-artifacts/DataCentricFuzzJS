check(Infinity, Math.min(), "min()");
check(NaN, Math.min(NaN), "min(NaN)");
check(NaN, Math.min({}), "min({})");
const v14 = {};
check(NaN, Math.min(v14, {}), "min({}, {})");
check(NaN, Math.min({}, 42), "min({}, 42)");
check(0, Math.min(null), "min(null)");
check(0, Math.min(+0, -0), "min(+0,-0)");
check(0, Math.min(-0, +0), "min(-0,+0)");
check(0, Math.min(+0, 5, -0), "min(+0, 5, -0)");
check(0, Math.min(-0, 5, +0), "min(-0, 5, +0)");
check(2, Math.min.length, "min.length");
var values = [0,-0,-1,1,-2,2,3.14159,1000.123,536870911,-536870912,Infinity,-Infinity];
for (let i86 = 0; i86 < values.length; ++i86) {
    check(values[i86], Math.min(values[i86]), ("min(" + values[i86]) + ")");
    check(-Infinity, Math.min(values[i86], -Infinity), ("min(" + values[i86]) + ", -Infinity)");
    check(values[i86], Math.min(values[i86], +Infinity), ("min(" + values[i86]) + ", +Infinity)");
}
check(-5, Math.min(-5, 1, 2, 3, 4), "min is the first value");
check(-5, Math.min(4, 1, 2, 3, -5), "min is the last value");
check(-57000.4, Math.min(1.3, 1, -57000.4, 3, 4), "min is the first value");
check(30981503.795899816, Math.min(30981503.7959, 30981503.795899995, 30981503.79589999, 30981503.795899987, 30981503.795899983, 30981503.79589998, 30981503.795899976, 30981503.795899972, 30981503.79589997, 30981503.795899965, 30981503.79589996, 30981503.795899957, 30981503.795899954, 30981503.79589995, 30981503.795899946, 30981503.795899943, 30981503.79589994, 30981503.795899935, 30981503.79589993, 30981503.795899928, 30981503.795899924, 30981503.79589992, 30981503.795899916, 30981503.795899913, 30981503.79589991, 30981503.795899905, 30981503.7958999, 30981503.795899898, 30981503.795899894, 30981503.79589989, 30981503.795899887, 30981503.795899883, 30981503.79589988, 30981503.795899875, 30981503.79589987, 30981503.795899868, 30981503.795899864, 30981503.79589986, 30981503.795899857, 30981503.795899853, 30981503.79589985, 30981503.795899846, 30981503.795899842, 30981503.79589984, 30981503.795899834, 30981503.79589983, 30981503.795899827, 30981503.795899823, 30981503.79589982, 30981503.795899816), "many values");
print("Math.min(+0.0, -0.0) " + Math.min(+0, -0));
if ((1 / Math.min(+0, -0)) < 0) {
    print("Check (1 / Math.min(+0.0, -0.0) < 0)  - true ");
} else {
    print("Check (1 / Math.min(+0.0, -0.0) < 0)  - false ");
}
check(Number.NEGATIVE_INFINITY, Math.min(5, Number.NEGATIVE_INFINITY), "min the negative infinity");
check(5, Math.min(5, Number.POSITIVE_INFINITY), "min is 5");
check(Number.NEGATIVE_INFINITY, Math.min(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY), "min is the negative infinity");
print("done");
function check(a252, a253, a254) {
    if (isNaN(a253)) {
        if (a252.toString() !== a253.toString()) {
            print("fail: " + a254);
        }
    } else {
        if (a252 !== a253) {
            print("fail: " + a254);
        }
    }
}
function foo(a268, a269) {
    var c = Math.min(a268, a269);
    return 1 / c;
}
print(foo(-0, 0));
print(foo(-0, 0));
print(foo(0, -0));
print(foo(-0, -0));
function BLUE143505(a296, a297) {
    var c;
    if (Math.min(-4, undefined)) {
        c = false;
    }
    return c;
}
print(BLUE143505());
print(BLUE143505());
