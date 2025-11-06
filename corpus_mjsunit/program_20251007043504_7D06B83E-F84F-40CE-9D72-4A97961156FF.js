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
class C31 extends Map {
    constructor(a33) {
        super(a33);
    }
    set(a35, a36) {
    }
}
for (let i38 = 0; i38 < 100; ++i38) {
    const v44 = new C31(map);
    let cloned = v44;
    shouldBe(cloned.size, 0);
}
