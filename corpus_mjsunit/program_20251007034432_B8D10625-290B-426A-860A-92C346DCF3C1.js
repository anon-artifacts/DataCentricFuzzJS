function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
const v15 = new Set([0,1,2,3,4]);
let set = v15;
for (let i18 = 0; i18 < 100; ++i18) {
    const v24 = new Set(set);
    let cloned = v24;
    shouldBe(cloned.size, set.size);
}
function f29() {
    return ([])[Symbol.iterator]();
}
const t16 = Set.prototype;
t16[Symbol.iterator] = f29;
for (let i38 = 0; i38 < 100; ++i38) {
    const v44 = new Set(set);
    let cloned = v44;
    shouldBe(cloned.size, 0);
}
