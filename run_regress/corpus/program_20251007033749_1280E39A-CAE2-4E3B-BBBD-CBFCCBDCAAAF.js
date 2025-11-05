checkNaN(NaN);
checkNaN(-4);
check(-Infinity, +0);
check(-Infinity, -0);
check(0, 1);
check(+Infinity, +Infinity);
check(3, (Math.E * Math.E) * Math.E);
if (!isNaN(Math.log())) {
    print("error: Math.log() is not NaN");
}
print("done");
function check(a41, a42) {
    var rs = Math.log(a42);
    if (Math.abs(rs - a41) > 1e-11) {
        print((("log(" + a42) + ") != ") + a41);
        print(((" wrong result is log(" + a42) + ") = ") + rs);
    }
}
function checkNaN(a62) {
    var rs = Math.log(a62);
    if (!isNaN(rs)) {
        print(("log(" + a62) + ") !=  NaN");
        print(((" wrong result is log(" + a62) + ") = ") + rs);
    }
}
