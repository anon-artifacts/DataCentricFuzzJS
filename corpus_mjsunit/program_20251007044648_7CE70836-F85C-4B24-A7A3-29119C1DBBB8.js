function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v6 = "bad value: " + a1;
        let v7;
        try { v7 = new Error(v6); } catch (e) {}
        throw v7;
    }
}
try { noInline(shouldBe); } catch (e) {}
function target(a11) {
    let v12;
    try { v12 = new a11(); } catch (e) {}
    return v12;
}
try { noInline(target); } catch (e) {}
for (let i15 = 0; i15 < 10000; ++i15) {
    let v22;
    try { v22 = target(Array); } catch (e) {}
    const v23 = v22?.length;
    try { shouldBe(v23, 0); } catch (e) {}
}
