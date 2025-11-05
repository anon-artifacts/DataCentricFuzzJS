checkNaN(NaN);
check(+0, +0);
check(-0, -0);
checkNaN(+Infinity);
checkNaN(-Infinity);
check(1, Math.PI / 2);
check(0.5, Math.PI / 6);
if (!isNaN(Math.sin())) {
    print("error: Math.sin() is not NaN");
}
print("done");
function check(a41, a42) {
    var rs = Math.sin(a42);
    if (Math.abs(rs - a41) > 1e-11) {
        print((("sin(" + a42) + ") != ") + a41);
        print(((" wrong result is sin(" + a42) + ") = ") + rs);
    }
}
function checkNaN(a62) {
    var rs = Math.sin(a62);
    if (!isNaN(rs)) {
        print(("sin(" + a62) + ") !=  NaN");
        print(((" wrong result is sin(" + a62) + ") = ") + rs);
    }
}
