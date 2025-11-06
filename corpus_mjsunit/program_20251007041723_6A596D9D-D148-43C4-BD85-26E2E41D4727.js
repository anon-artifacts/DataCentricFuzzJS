function test(a1) {
    a1(0);
    a1(Number.MIN_VALUE);
    a1(Number.MAX_VALUE);
    a1(Number.MIN_SAFE_INTEGER);
    a1(Number.MIN_SAFE_INTEGER - 13);
    a1(Number.MAX_SAFE_INTEGER);
    a1(Number.MAX_SAFE_INTEGER + 23);
    a1(0);
    a1(-1);
    a1(123456);
    a1(Number.NaN);
    a1(Number.POSITIVE_INFINITY);
    a1(Number.NEGATIVE_INFINITY);
    a1(1 / 0);
    a1(-1 / 0);
    a1(Number.EPSILON);
}
function f(a46) {
    return Number.isInteger(+a46);
}
test(f);
test(f);
test(f);
function test2(a54) {
    a54(0);
    a54(Number.MIN_VALUE);
    a54(Number.MAX_VALUE);
    a54(Number.MIN_SAFE_INTEGER);
    a54(Number.MIN_SAFE_INTEGER - 13);
    a54(Number.MAX_SAFE_INTEGER);
    a54(Number.MAX_SAFE_INTEGER + 23);
    a54(0);
    a54(-1);
    a54(123456);
    a54(Number.NaN);
    a54(Number.POSITIVE_INFINITY);
    a54(Number.NEGATIVE_INFINITY);
    a54(1 / 0);
    a54(-1 / 0);
    a54(Number.EPSILON);
}
function f2(a99) {
    return Number.isInteger(a99);
}
test2(f2);
test2(f2);
test2(f2);
