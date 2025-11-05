function test(a1) {
    Number.isFinite(0);
    Number.isFinite(Number.MIN_VALUE);
    Number.isFinite(Number.MAX_VALUE);
    Number.isFinite(Number.MIN_SAFE_INTEGER);
    Number.isFinite(Number.MIN_SAFE_INTEGER - 13);
    Number.isFinite(Number.MAX_SAFE_INTEGER);
    Number.isFinite(Number.MAX_SAFE_INTEGER + 23);
    Number.isFinite(0);
    Number.isFinite(-1);
    Number.isFinite(123456);
    Number.isFinite(Number.NaN);
    Number.isFinite(Number.POSITIVE_INFINITY);
    Number.isFinite(Number.NEGATIVE_INFINITY);
    Number.isFinite(1 / 0);
    Number.isFinite(-1 / 0);
}
test();
test();
test();
function test2(a47) {
    Number.isFinite({});
    Number.isFinite("abc");
    Number.isFinite(0);
    Number.isFinite(Number.MIN_VALUE);
    Number.isFinite(Number.MAX_VALUE);
    Number.isFinite(Number.MIN_SAFE_INTEGER);
    Number.isFinite(Number.MIN_SAFE_INTEGER - 13);
    Number.isFinite(Number.MAX_SAFE_INTEGER);
    Number.isFinite(Number.MAX_SAFE_INTEGER + 23);
    Number.isFinite(0);
    Number.isFinite(-1);
    Number.isFinite(123456);
    Number.isFinite(Number.NaN);
    Number.isFinite(Number.POSITIVE_INFINITY);
    Number.isFinite(Number.NEGATIVE_INFINITY);
    Number.isFinite(1 / 0);
    Number.isFinite(-1 / 0);
}
test2();
test2();
test2();
