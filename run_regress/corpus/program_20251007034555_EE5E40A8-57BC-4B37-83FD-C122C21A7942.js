function foo(a1) {
    var o = {};
    if (a1) {
        for (let i5 = 0; i5 < 100; ++i5) {
            try { bar(o); } catch (e) {}
        }
    }
    return 42;
}
function bar() {
}
try { noInline(foo); } catch (e) {}
try { noInline(bar); } catch (e) {}
for (let i19 = 0; i19 < 100000; ++i19) {
    try { foo(true); } catch (e) {}
}
