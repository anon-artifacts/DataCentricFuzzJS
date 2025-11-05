function testReplace2() {
    var s = "H e l l o";
    var s1;
    for (i = 0; i < 100; ++i) {
        s1 = s.replace(" ", "");
    }
    return s1;
}
testReplace2();
