function TestCreateString(a1) {
    var l = a1 * 1;
    var r = "r";
    while (r.length < a1) {
        r = r + r;
    }
    return r;
}
TestCreateString(1);
TestCreateString(2);
TestCreateString(3);
TestCreateString(6);
