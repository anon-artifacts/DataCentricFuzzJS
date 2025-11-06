function f() {
    for (let i2 = 2; i2 < 2; i2++) {
        var a = /a/;
    }
    for (let i11 = 0; i11 < 2; i11++) {
        try { a.exec("aaa"); } catch (e) {}
    }
}
f();
