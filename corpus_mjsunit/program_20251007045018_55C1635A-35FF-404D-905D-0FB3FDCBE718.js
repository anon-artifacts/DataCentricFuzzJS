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
    try { v11 = Object(a9); } catch (e) {}
    return v11;
}
try { noInline(test); } catch (e) {}
function f14() {
    for (let i16 = 0; i16 < 10000; ++i16) {
        let v23;
        try { v23 = test(undefined); } catch (e) {}
        var object = v23;
        const v25 = object?.__proto__;
        const v27 = Object?.prototype;
        try { shouldBe(v25, v27); } catch (e) {}
    }
}
try { f14(); } catch (e) {}
