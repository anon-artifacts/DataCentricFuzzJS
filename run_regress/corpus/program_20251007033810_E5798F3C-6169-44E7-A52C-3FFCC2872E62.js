checkNaN(NaN);
checkNaN(-Infinity);
checkNaN(-0.1);
check(+0, +0);
check(-0, -0);
check(+Infinity, +Infinity);
check(5, 25);
if (!isNaN(Math.sqrt())) {
    print("error: Math.sqrt() is not NaN");
}
print("done");
function check(a38, a39) {
    var rs = Math.sqrt(a39);
    if (Math.abs(rs - a38) > 1e-11) {
        print((("sqrt(" + a39) + ") != ") + a38);
        print(((" wrong result is sqrt(" + a39) + ") = ") + rs);
    }
}
function checkNaN(a59) {
    var rs = Math.sqrt(a59);
    if (!isNaN(rs)) {
        print(("sqrt(" + a59) + ") !=  NaN");
        print(((" wrong result is sqrt(" + a59) + ") = ") + rs);
    }
}
