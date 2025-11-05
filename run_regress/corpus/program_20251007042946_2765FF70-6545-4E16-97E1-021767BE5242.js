function foo() {
    return 42;
}
function bar() {
    let v3;
    try { v3 = foo(); } catch (e) {}
    return v3;
}
try { noInline(foo); } catch (e) {}
try { noInline(bar); } catch (e) {}
function f7() {
    for (let i9 = 0; i9 < 10000000; ++i9) {
        let v15;
        try { v15 = bar(); } catch (e) {}
        var result = v15;
        if (result != 42) {
            throw "Error: bad result: " + result;
        }
    }
}
try { f7(); } catch (e) {}
