function isnegativezero(a1, a2) {
    return !((a1 != 0) || ((1 / a1) >= 0));
}
function test(a12, a13) {
    var result = a12 | 0;
    print(((((result === a13) && (isnegativezero(result) === isnegativezero(a13)) ? "PASS:" : "FAIL: ") + (isnegativezero(a12) ? "-0.0" : a12)) + " ") + (isnegativezero(result) ? "-0.0" : result));
}
var negZero = -0;
test(0, 0);
test(-0, 0);
test(0.1, 0);
test(-0.1, 0);
test(1.1, 1);
test(-1.1, -1);
test(4294967295.5, -1);
test(-4294967295.5, 1);
test(4294967296, 0);
test(-4294967296, 0);
test(4294967297.1, 1);
test(-4294967297.1, -1);
test(2147483647, 2147483647);
test(2147483648, -2147483648);
test(Number.NEGATIVE_INFINITY, 0);
test(Number.POSITIVE_INFINITY, 0);
test(Number.NaN, 0);
test((2147483647 * 2147483647) + 1024, 1024);
test(9223372036854774784, -1024);
test(-9223372036854774784, 1024);
test(9.223372036854776e+18, 0);
test(9.223372036854778e+18, 2048);
test(9.223372036854778e+18, 2048);
test(-9.223372036854776e+18, 0);
test(-9.223372036854778e+18, -2048);
test(-9.223372036854778e+18, -2048);
