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
    try { v12 = isFinite(a10); } catch (e) {}
    return v12;
}
try { noInline(test); } catch (e) {}
const v17 = {
    valueOf() {
        return 42;
    },
};
var object = v17;
for (let i20 = 0; i20 < 10000; ++i20) {
    let v26;
    try { v26 = test(object); } catch (e) {}
    try { shouldBe(v26, true); } catch (e) {}
}
const v31 = {
    valueOf() {
        return 42.195;
    },
};
var object = v31;
for (let i34 = 0; i34 < 10000; ++i34) {
    let v40;
    try { v40 = test(object); } catch (e) {}
    try { shouldBe(v40, true); } catch (e) {}
}
