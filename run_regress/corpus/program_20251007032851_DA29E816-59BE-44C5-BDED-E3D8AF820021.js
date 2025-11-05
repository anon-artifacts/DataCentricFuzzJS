function FAILED() {
    print("FAILED");
    throw -1;
}
var e = -2147483648;
var l;
function test0() {
    l = -e << 1;
    var m = -e;
    return m;
}
for (let i18 = 0; i18 < 1000; i18++) {
    if (test0() != 2147483648) {
        FAILED();
    }
}
print("Passed");
