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
function test(a10, a11) {
    if (a10) {
        let v13;
        try { v13 = Number(a11); } catch (e) {}
        return v13;
    }
    return a11;
}
try { noInline(test); } catch (e) {}
const v18 = {
    valueOf() {
        return 41;
    },
};
var object = v18;
for (let i21 = 0; i21 < 10000; ++i21) {
    let v28;
    try { v28 = test(false, object); } catch (e) {}
    try { shouldBe(v28, object); } catch (e) {}
}
for (let i31 = 0; i31 < 10000; ++i31) {
    let v38;
    try { v38 = test(true, object); } catch (e) {}
    try { shouldBe(v38, 41); } catch (e) {}
}
