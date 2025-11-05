function f0() {
    function shouldBe(a2, a3) {
        if (a2 !== a3) {
            const v6 = `bad value: ${a2}`;
            let v7;
            try { v7 = new Error(v6); } catch (e) {}
            throw v7;
        }
    }
    try { noInline(shouldBe); } catch (e) {}
    function target() {
        let v13;
        try { v13 = Symbol("Cocoa"); } catch (e) {}
        var symbol = v13;
        const v15 = typeof symbol;
        try { shouldBe(v15, "symbol"); } catch (e) {}
    }
    try { noInline(target); } catch (e) {}
    for (let i20 = 0; i20 < 10000; ++i20) {
        try { target(); } catch (e) {}
    }
}
try { f0(); } catch (e) {}
