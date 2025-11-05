function stringConvert() {
    var a = [];
    var s1 = "F";
    var s2 = "1.3";
    var s3 = "5";
    for (let i10 = 0; i10 < 10; i10++) {
        a[0] = 1 >> s1;
        a[1] = 10 - s2;
        a[2] = 15 * s3;
        a[3] = s3 | 32;
        a[4] = s2 + 60;
        a[7] = s3 & "7";
    }
    return a.toString();
}
stringConvert();
