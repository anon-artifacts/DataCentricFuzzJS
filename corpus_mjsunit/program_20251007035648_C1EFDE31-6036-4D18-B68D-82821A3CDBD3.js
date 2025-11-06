function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
var array = [null,null,null];
shouldBe(array.toLocaleString(), `,,`);
