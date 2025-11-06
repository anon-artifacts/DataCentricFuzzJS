function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
{
    let array = [42,,,0];
    shouldBe(array.lastIndexOf(Number.NaN), -1);
    shouldBe(array.lastIndexOf(0), 3);
}
{
    let array = [42.195,,,0];
    shouldBe(array.lastIndexOf(Number.NaN), -1);
}
{
    let array = [42.195,Number.NaN,,0];
    shouldBe(array.lastIndexOf(Number.NaN), -1);
}
