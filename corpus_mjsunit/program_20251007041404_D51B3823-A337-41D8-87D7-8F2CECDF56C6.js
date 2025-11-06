function f0() {
    var o = "hello";
    function f3(a4) {
        var result = "";
        for (const v7 in a4) {
            result += a4?.[a4];
        }
        return result;
    }
    var foo = f3;
    try { noInline(foo); } catch (e) {}
    for (let i13 = 0; i13 < 10000; ++i13) {
        let v20;
        try { v20 = foo("hello"); } catch (e) {}
        if (v20 !== "hello") {
            let v25;
            try { v25 = new Error("incorrect result"); } catch (e) {}
            throw v25;
        }
    }
    try { foo(null); } catch (e) {}
}
try { f0(); } catch (e) {}
