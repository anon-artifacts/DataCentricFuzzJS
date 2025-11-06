function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
for (let i9 = 0; i9 < 10; ++i9) {
    const v16 = Array.prototype;
    const v26 = {
        get() {
            const v20 = new Error("get is called.");
            throw v20;
        },
        set(a22) {
            const v25 = new Error("set is called.");
            throw v25;
        },
    };
    Object.defineProperty(v16, i9, v26);
}
var original = [0,1,2,3,4,5,6,7,8,9];
var generated = Array.from(original);
shouldBe(generated.length, 10);
for (let i48 = 0; i48 < 10; ++i48) {
    shouldBe(generated[i48], i48);
}
