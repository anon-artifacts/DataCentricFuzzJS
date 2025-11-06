function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v6 = "bad value: " + a1;
        let v7;
        try { v7 = new Error(v6); } catch (e) {}
        throw v7;
    }
}
function gen1(a9) {
    return "he" + a9;
}
try { noInline(gen1); } catch (e) {}
function gen2(a15) {
    return a15 + "ld";
}
try { noInline(gen2); } catch (e) {}
function assign(a20, a21, a22) {
    a20[a21] = a22;
}
try { noInline(assign); } catch (e) {}
for (let i25 = 0; i25 < 10000; ++i25) {
    var object = {};
    if ((i25 % 2) === 0) {
        let v38;
        try { v38 = gen1("llo"); } catch (e) {}
        try { assign(object, v38, 42); } catch (e) {}
        const v41 = object?.hello;
        try { shouldBe(v41, 42); } catch (e) {}
    } else {
        let v45;
        try { v45 = gen2("wor"); } catch (e) {}
        try { assign(object, v45, 42); } catch (e) {}
        const v48 = object?.world;
        try { shouldBe(v48, 42); } catch (e) {}
    }
}
