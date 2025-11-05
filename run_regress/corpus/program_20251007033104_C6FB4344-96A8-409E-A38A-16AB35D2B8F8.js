function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v5 = `bad value: ${a1}`;
        let v6;
        try { v6 = new Error(v5); } catch (e) {}
        throw v6;
    }
}
function test1(a8) {
    let v10;
    try { v10 = Number.isFinite(a8); } catch (e) {}
    try { shouldBe(v10, true); } catch (e) {}
}
try { noInline(test1); } catch (e) {}
for (let i17 = -10000; i17 < 10000; ++i17) {
    try { test1(i17); } catch (e) {}
}
function test2(a25) {
    let v28;
    try { v28 = Number.isFinite(Infinity); } catch (e) {}
    try { shouldBe(v28, false); } catch (e) {}
    const v31 = -Infinity;
    let v32;
    try { v32 = Number.isFinite(v31); } catch (e) {}
    try { shouldBe(v32, false); } catch (e) {}
    let v36;
    try { v36 = Number.isFinite(NaN); } catch (e) {}
    try { shouldBe(v36, false); } catch (e) {}
}
try { noInline(test2); } catch (e) {}
for (let i41 = 0; i41 < 100; ++i41) {
    try { test2(i41); } catch (e) {}
}
function test3(a49) {
    let v52;
    try { v52 = Number.isFinite("0"); } catch (e) {}
    try { shouldBe(v52, false); } catch (e) {}
    let v56;
    try { v56 = Number.isFinite("Hello"); } catch (e) {}
    try { shouldBe(v56, false); } catch (e) {}
}
try { noInline(test3); } catch (e) {}
for (let i61 = 0; i61 < 100; ++i61) {
    try { test3(i61); } catch (e) {}
}
