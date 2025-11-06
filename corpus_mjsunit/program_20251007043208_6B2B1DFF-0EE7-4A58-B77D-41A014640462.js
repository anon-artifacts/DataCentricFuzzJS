function testInt(a1) {
    var a = a1 | 0;
    return a !== a;
}
testInt(10);
