function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v6 = "bad value: " + a1;
        let v7;
        try { v7 = new Error(v6); } catch (e) {}
        throw v7;
    }
}
function getByVal(a9, a10) {
    return a9?.[a10];
}
try { noInline(getByVal); } catch (e) {}
var value = "lo";
function getStr1() {
    return "hel" + value;
}
try { noInline(getStr1); } catch (e) {}
function getStr2() {
    return "hello";
}
try { noInline(getStr2); } catch (e) {}
var object = { hello: 42, world: 50 };
for (let i28 = 0; i28 < 10000; ++i28) {
    const v37 = (i28 % 2) === 0;
    let v38;
    try { v38 = getStr1(); } catch (e) {}
    let v39;
    try { v39 = getStr2(); } catch (e) {}
    const v40 = v37 ? v38 : v39;
    let v41;
    try { v41 = getByVal(object, v40); } catch (e) {}
    try { shouldBe(v41, 42); } catch (e) {}
}
let v45;
try { v45 = getByVal(object, "world"); } catch (e) {}
try { shouldBe(v45, 50); } catch (e) {}
