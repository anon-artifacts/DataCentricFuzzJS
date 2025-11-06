function testMatchAsCondition() {
    var a = ["0","0","0","0"];
    var r = /0/;
    ("x").q;
    for (let i12 = 0; i12 < 4; i12++) {
        a[i12].match(r) ? 1 : 2;
    }
}
testMatchAsCondition();
