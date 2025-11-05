function test() {
    var o = [1];
    var a = (o ^= 1)[1];
    return a;
}
test();
