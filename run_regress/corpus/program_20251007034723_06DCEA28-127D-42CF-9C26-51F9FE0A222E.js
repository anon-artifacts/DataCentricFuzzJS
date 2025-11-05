function test() {
    var s = "1";
    for (let i4 = 0; i4 < 2; i4++) {
        if (i4 == 0) {
            s = ("1000000" + s) + "1";
        } else {
            s -= 1;
        }
    }
    print(s);
}
test();
test();
