function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
async function* asyncGenerator() {
}
var AsyncGeneratorPrototype = Object.getPrototypeOf(asyncGenerator).prototype;
asyncGenerator.prototype = null;
shouldBe(Object.getPrototypeOf(asyncGenerator()), AsyncGeneratorPrototype);
