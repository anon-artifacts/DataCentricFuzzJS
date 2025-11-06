function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v6 = "bad value: " + a1;
        let v7;
        try { v7 = new Error(v6); } catch (e) {}
        throw v7;
    }
}
function assign(a9, a10, a11) {
    a9[a10] = a11;
}
try { noInline(assign); } catch (e) {}
var string = "hello";
for (let i17 = 0; i17 < 10001; ++i17) {
    var object = {};
    if (i17 === 10000) {
        try { assign(object, "testing", 42); } catch (e) {}
        const v30 = object?.testing;
        try { shouldBe(v30, 42); } catch (e) {}
        const v33 = object?.hello;
        try { shouldBe(v33, undefined); } catch (e) {}
    } else {
        try { assign(object, string, 42); } catch (e) {}
        const v38 = object?.[string];
        try { shouldBe(v38, 42); } catch (e) {}
    }
}
