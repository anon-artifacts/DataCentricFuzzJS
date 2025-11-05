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
function f41(a42, a43) {
    return (a43 % 2) == 0;
}
var filtered = original.filter(f41);
shouldBe(filtered.length, 5);
for (let i54 = 0; i54 < 5; ++i54) {
    shouldBe(filtered[i54], i54 * 2);
}
