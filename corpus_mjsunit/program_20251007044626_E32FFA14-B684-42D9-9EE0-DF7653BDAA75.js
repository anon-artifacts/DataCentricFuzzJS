function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v6 = "bad value: " + a1;
        let v7;
        try { v7 = new Error(v6); } catch (e) {}
        throw v7;
    }
}
function test(a9, a10) {
    const v12 = a9 / a10;
    let v13;
    try { v13 = new Array(v12); } catch (e) {}
    return v13;
}
try { noInline(test); } catch (e) {}
var value = 0;
var number = 0;
for (let i21 = 0; i21 < 10000; ++i21) {
    value = i21 * 2;
    number = 2;
    if (i21 === (10000 - 1)) {
        value = 0;
        number = -1;
    }
    let v37;
    try { v37 = test(value, number); } catch (e) {}
    const v38 = v37?.length;
    const v39 = value / number;
    try { shouldBe(v38, v39); } catch (e) {}
}
