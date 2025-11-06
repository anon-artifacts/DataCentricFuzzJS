function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
{
    let i = 2;
    let j = 3;
    shouldBe(2 ** 3, 8);
    shouldBe(i ** 3, 8);
    shouldBe(2 ** j, 8);
    shouldBe(i ** j, 8);
}
{
    shouldBe(2 ** (3 ** 3), 134217728);
    shouldBe((2 ** 3) + 3, 11);
    shouldBe((2 ** 3) + (3 ** 3), 35);
    shouldBe((2 ** 3) * 3, 24);
    shouldBe((2 ** 3) * (3 ** 3), 216);
    shouldBe(2 + (3 ** 3), 29);
    shouldBe(2 * (3 ** 3), 54);
}
{
    let i = 2;
    i **= 4;
    shouldBe(i, 16);
    i **= 1 + 1;
    shouldBe(i, 256);
}
for (let i92 = 0; i92 < 10000; ++i92) {
    let a = Math.random();
    let b = Math.random();
    shouldBe(a ** b, Math.pow(a, b));
}
