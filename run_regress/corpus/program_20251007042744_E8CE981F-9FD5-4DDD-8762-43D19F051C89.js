function test(a1) {
    a1(0);
    a1(Number.MIN_SAFE_INTEGER);
    a1(Number.MIN_SAFE_INTEGER - 13);
    a1(Number.MIN_SAFE_INTEGER + 13);
    a1(Number.MAX_SAFE_INTEGER);
    a1(Number.MAX_SAFE_INTEGER + 23);
    a1(Number.MAX_SAFE_INTEGER - 23);
    a1(Number.MIN_VALUE);
    a1(Number.MAX_VALUE);
    a1(Number.NaN);
    a1(Number.POSITIVE_INFINITY);
    a1(Number.NEGATIVE_INFINITY);
    a1(1 / 0);
    a1(-1 / 0);
    a1(Number.EPSILON);
    var near_upper = Math.pow(2, 52);
    a1(near_upper);
    a1(2 * near_upper);
    a1((2 * near_upper) - 1);
    a1((2 * near_upper) - 2);
    a1((2 * near_upper) + 1);
    a1((2 * near_upper) + 2);
    a1((2 * near_upper) + 7);
    var near_lower = -near_upper;
    a1(near_lower);
    a1(2 * near_lower);
    a1((2 * near_lower) + 1);
    a1((2 * near_lower) + 2);
    a1((2 * near_lower) - 1);
    a1((2 * near_lower) - 2);
    a1((2 * near_lower) - 7);
}
function NumberIsSafeInteger(a112) {
    return Number.isSafeInteger(+a112);
}
test(NumberIsSafeInteger);
test(NumberIsSafeInteger);
test(NumberIsSafeInteger);
function ObjectIsSafeInteger(a120) {
    return Number.isSafeInteger(a120);
}
test(ObjectIsSafeInteger);
test(ObjectIsSafeInteger);
test(ObjectIsSafeInteger);
