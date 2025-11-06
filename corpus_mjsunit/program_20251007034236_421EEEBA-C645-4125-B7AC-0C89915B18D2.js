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
        return +a11;
    }
    return a11;
}
try { noInline(test); } catch (e) {}
const v17 = {
    valueOf() {
        return 41;
    },
};
var object = v17;
for (let i20 = 0; i20 < 10000; ++i20) {
    let v27;
    try { v27 = test(false, object); } catch (e) {}
    try { shouldBe(v27, object); } catch (e) {}
}
for (let i30 = 0; i30 < 10000; ++i30) {
    let v37;
    try { v37 = test(true, object); } catch (e) {}
    try { shouldBe(v37, 41); } catch (e) {}
}
