checkNaN(NaN);
check(+0, +0);
check(+0, -0);
check(+Infinity, +Infinity);
check(+Infinity, -Infinity);
check(3.14, -3.14);
check(3.14, 3.14);
check(5, -5);
check(5, 5);
check(2147483647, 2147483647);
check(2147483648, -2147483648);
if (!isNaN(Math.abs())) {
    print("error: Math.abs() is not NaN");
}
print("done");
function check(a54, a55) {
    var rs = Math.abs(a55);
    if (rs != a54) {
        print((("abs(" + a55) + ") != ") + a54);
        print(((" wrong result is abs(" + a55) + ") = ") + rs);
    }
}
function checkNaN(a72) {
    var rs = Math.abs(a72);
    if (!isNaN(rs)) {
        print(("abs(" + a72) + ") !=  NaN");
        print(((" wrong result is abs(" + a72) + ") = ") + rs);
    }
}
