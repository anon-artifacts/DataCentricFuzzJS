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
    return { done: true };
}
const t16 = set[Symbol.iterator]().__proto__;
t16.next = f29;
for (let i37 = 0; i37 < 100; ++i37) {
    const v43 = new Set(set);
    let cloned = v43;
    shouldBe(cloned.size, 0);
}
