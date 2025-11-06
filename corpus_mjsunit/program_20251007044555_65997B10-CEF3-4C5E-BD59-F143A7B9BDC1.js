function foo(a1) {
    global = a1;
}
function bar() {
    return global;
}
try { noInline(foo); } catch (e) {}
try { noInline(bar); } catch (e) {}
var value = 42;
try { foo(value); } catch (e) {}
var n = 100000;
var m = 100;
for (let i16 = 0; i16 < n; ++i16) {
    if (i16 == (n - m)) {
        value = 53;
        try { foo(53); } catch (e) {}
    }
    let v25;
    try { v25 = bar(); } catch (e) {}
    var result = v25;
    if (result != value) {
        throw (("Error: on iteration " + i16) + " got: ") + result;
    }
}
