function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
{
    let array = [42.195,-0,-Infinity];
    shouldBe(array.lastIndexOf(Infinity), -1);
    shouldBe(array.lastIndexOf(-Infinity), 2);
    shouldBe(array.lastIndexOf(42), -1);
}
{
    let array = [1,2,3,0];
    shouldBe(array.lastIndexOf(Infinity), -1);
    shouldBe(array.lastIndexOf(-Infinity), -1);
}
{
    let array = ["String",42.5,Infinity,33];
    shouldBe(array.lastIndexOf(Infinity), 2);
    shouldBe(array.lastIndexOf(-Infinity), -1);
}
