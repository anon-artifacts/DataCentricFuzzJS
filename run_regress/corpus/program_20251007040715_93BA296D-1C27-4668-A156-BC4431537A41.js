function Test() {
    var left = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
    for (let i6 = 0; i6 < 100000; i6++) {
        var cons = left + right;
        var substring = cons.substring(20, 80);
        var index = substring.indexOf("Y");
    }
}
Test();
