function test() {
    for (let i2 = 0; i2 < 2; i2++) {
        var a = /a/;
        a.lastIndex;
        a.exec("aaa");
        a.lastIndex;
    }
    for (let i17 = 0; i17 < 2; i17++) {
        var a = /a/g;
        a.lastIndex;
        a.exec("aaa");
        a.lastIndex;
    }
    for (let i32 = 0; i32 < 2; i32++) {
        var a = /a/y;
        a.lastIndex;
        a.exec("aaa");
        a.lastIndex;
    }
}
test();
test();
