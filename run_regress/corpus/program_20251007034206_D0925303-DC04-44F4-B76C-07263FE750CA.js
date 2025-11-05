function foo(a1, a2) {
    if (a1) {
        global = a2;
    }
}
function bar() {
    return global;
}
try { noInline(foo); } catch (e) {}
try { noInline(bar); } catch (e) {}
for (let i10 = 0; i10 < 10; ++i10) {
    try { foo(false); } catch (e) {}
}
var value = 42;
try { foo(true, value); } catch (e) {}
var n = 100000;
var m = 100;
for (let i27 = 0; i27 < n; ++i27) {
    if (i27 == (n - m)) {
        value = 53;
        try { foo(true, 53); } catch (e) {}
    }
    let v37;
    try { v37 = bar(); } catch (e) {}
    var result = v37;
    if (result != value) {
        throw (("Error: on iteration " + i27) + " got: ") + result;
    }
}
