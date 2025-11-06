function Foo(a1, a2, a3, a4, a5, a6, a7) {
    this.f = 42;
}
function bar() {
    let v11;
    try { v11 = new Foo(); } catch (e) {}
    return v11;
}
try { noInline(Foo); } catch (e) {}
try { noInline(bar); } catch (e) {}
function f15() {
    for (let i17 = 0; i17 < 10000000; ++i17) {
        let v23;
        try { v23 = bar(); } catch (e) {}
        var result = v23;
        if (result?.f != 42) {
            throw "Error: bad result: " + result;
        }
    }
}
try { f15(); } catch (e) {}
