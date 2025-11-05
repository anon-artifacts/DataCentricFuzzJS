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
map[Symbol.iterator] = f31;
for (let i39 = 0; i39 < 100; ++i39) {
    const v45 = new Map(map);
    let cloned = v45;
    shouldBe(cloned.size, 0);
}
