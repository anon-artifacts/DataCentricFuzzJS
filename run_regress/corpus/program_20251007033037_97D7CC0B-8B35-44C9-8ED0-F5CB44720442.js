function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v6 = "bad value: " + a1;
        let v7;
        try { v7 = new Error(v6); } catch (e) {}
        throw v7;
    }
}
try { noInline(shouldBe); } catch (e) {}
function test(a11) {
    return "return" in a11;
}
try { noInline(test); } catch (e) {}
var object1 = {};
var object2 = { hello: 42 };
for (let i21 = 0; i21 < 10; ++i21) {
    let v27;
    try { v27 = test(object1); } catch (e) {}
    try { shouldBe(v27, false); } catch (e) {}
}
for (let i31 = 0; i31 < 1000000; ++i31) {
    let v37;
    try { v37 = test(object1); } catch (e) {}
    try { shouldBe(v37, false); } catch (e) {}
    let v40;
    try { v40 = test(object2); } catch (e) {}
    try { shouldBe(v40, false); } catch (e) {}
}
