function test0() {
    var o = { a: 0 };
    var b = 3;
    for (let i7 = 0; i7 < 3; ++i7) {
        b >>>= 1;
        o.a = 0 / 1;
    }
    return o.a;
}
print(test0());
