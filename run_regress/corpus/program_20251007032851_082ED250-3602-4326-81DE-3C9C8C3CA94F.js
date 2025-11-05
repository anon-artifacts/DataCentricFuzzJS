function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
const v9 = new Map();
let map = v9;
for (let i12 = 0; i12 < 5; ++i12) {
    map.set(i12, i12);
}
for (let i20 = 0; i20 < 100; ++i20) {
    const v26 = new Map(map);
    let cloned = v26;
    shouldBe(cloned.size, map.size);
}
function f31() {
    return ([])[Symbol.iterator]();
}
const t19 = Map.prototype;
t19[Symbol.iterator] = f31;
for (let i40 = 0; i40 < 100; ++i40) {
    const v46 = new Map(map);
    let cloned = v46;
    shouldBe(cloned.size, 0);
}
