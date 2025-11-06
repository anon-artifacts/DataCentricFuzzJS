function test(a1, a2, a3, a4) {
    var a = a1 + a3;
    var b = a2 + a4;
    if (((a1 + a2) > (a3 + a4)) & (a > b)) {
        return 1;
    }
    if (((a1 + a2) > (a3 + a4)) | ((a1 + a3) > (a2 + a4))) {
        return 2;
    }
    return 3;
}
test(1, 20, 3, -1);
test(5, 4, 2, -2);
test(15, 3, -11, 4);
print("PASSED");
