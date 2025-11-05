function foo(a1, a2, a3, a4, a5, a6, a7) {
    return 42;
}
function bar() {
    let v10;
    try { v10 = foo(); } catch (e) {}
    return v10;
}
try { noInline(foo); } catch (e) {}
try { noInline(bar); } catch (e) {}
function f14() {
    for (let i16 = 0; i16 < 10000000; ++i16) {
        let v22;
        try { v22 = bar(); } catch (e) {}
        var result = v22;
        if (result != 42) {
            throw "Error: bad result: " + result;
        }
    }
}
try { f14(); } catch (e) {}
