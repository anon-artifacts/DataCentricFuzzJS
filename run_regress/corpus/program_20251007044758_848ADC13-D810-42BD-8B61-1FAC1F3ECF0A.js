function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v6 = "bad value: " + a1;
        let v7;
        try { v7 = new Error(v6); } catch (e) {}
        throw v7;
    }
}
function test(a9) {
    let v11;
    try { v11 = new String(a9); } catch (e) {}
    return v11;
}
try { noInline(test); } catch (e) {}
for (let i15 = 0; i15 < 10000; ++i15) {
    let v22;
    try { v22 = test("Cocoa"); } catch (e) {}
    var object = v22;
    const v25 = object instanceof String;
    try { shouldBe(v25, true); } catch (e) {}
    let v28;
    try { v28 = object.valueOf(); } catch (e) {}
    try { shouldBe(v28, "Cocoa"); } catch (e) {}
}
