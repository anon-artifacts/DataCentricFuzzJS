function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
function* gen() {
    var test = 42;
    yield 32;
    yield 33;
    yield test;
}
var g = gen();
shouldBe(g.next().value, 32);
shouldBe(g.next().value, 33);
shouldBe(g.next().value, 42);
