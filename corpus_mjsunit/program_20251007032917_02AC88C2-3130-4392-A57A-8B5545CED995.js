checkNaN(NaN);
checkNaN(5.1);
checkNaN(-2);
check(+0, 1);
check(Math.PI / 2, 0);
check(Math.PI / 3, 0.5);
checkNaN(+Infinity);
checkNaN(-Infinity);
if (!isNaN(Math.acos())) {
    print("error: Math.acos() is not NaN");
}
print("done");
function check(a40, a41) {
    var rs = Math.acos(a41);
    if (Math.abs(rs - a40) > 1e-11) {
        print((("acos(" + a41) + ") != ") + a40);
        print(((" wrong result is acos(" + a41) + ") = ") + rs);
    }
}
function checkNaN(a61) {
    var rs = Math.acos(a61);
    if (!isNaN(rs)) {
        print(("acos(" + a61) + ") !=  NaN");
        print(((" wrong result is acos(" + a61) + ") = ") + rs);
    }
}
