function shouldBe(a1, a2) {
    if (a1 !== a2) {
        let v6;
        try { v6 = String(a1); } catch (e) {}
        const v7 = `bad value: ${v6}`;
        let v8;
        try { v8 = new Error(v7); } catch (e) {}
        throw v8;
    }
}
function test(a10) {
    let v12;
    try { v12 = Number(a10); } catch (e) {}
    return v12 < 42;
}
try { noInline(test); } catch (e) {}
const v19 = {
    valueOf() {
        return 42;
    },
};
var object = v19;
for (let i22 = 0; i22 < 10000; ++i22) {
    let v28;
    try { v28 = test(object); } catch (e) {}
    try { shouldBe(v28, false); } catch (e) {}
}
const v33 = {
    valueOf() {
        return 42.195;
    },
};
var object = v33;
for (let i36 = 0; i36 < 10000; ++i36) {
    let v42;
    try { v42 = test(object); } catch (e) {}
    try { shouldBe(v42, false); } catch (e) {}
}
