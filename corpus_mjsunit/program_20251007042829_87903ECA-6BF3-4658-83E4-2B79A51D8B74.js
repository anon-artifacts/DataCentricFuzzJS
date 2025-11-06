function Foo() {
    this.f = 42;
}
function bar() {
    let v4;
    try { v4 = new Foo(); } catch (e) {}
    return v4;
}
try { noInline(Foo); } catch (e) {}
try { noInline(bar); } catch (e) {}
function f8() {
    for (let i10 = 0; i10 < 10000000; ++i10) {
        let v16;
        try { v16 = bar(); } catch (e) {}
        var result = v16;
        if (result?.f != 42) {
            throw "Error: bad result: " + result;
        }
    }
}
try { f8(); } catch (e) {}
