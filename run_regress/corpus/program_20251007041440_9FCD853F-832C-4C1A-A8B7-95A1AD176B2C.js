function foo(a1) {
    if (true) {
        function f3() {
            a1 = 43;
        }
        try { f3(); } catch (e) {}
        return arguments;
    }
    return a1;
}
try { noInline(foo); } catch (e) {}
for (let i10 = 0; i10 < 10000; ++i10) {
    let v16;
    try { v16 = foo(); } catch (e) {}
    var result = v16;
}
