function testMethodInit() {
    function o() {
        return "o";
    }
    function k() {
        return "k";
    }
    var x;
    for (let i8 = 0; i8 < 10; i8++) {
        x = { o: o, k: k };
    }
    return x.o() + x.k();
}
testMethodInit();
