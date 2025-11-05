var o = { f: 42 };
function foo(a4, a5) {
    if (a4) {
        o.f = a5;
    }
}
function bar() {
    return o?.f;
}
try { noInline(foo); } catch (e) {}
try { noInline(bar); } catch (e) {}
for (let i12 = 0; i12 < 10; ++i12) {
    try { foo(false); } catch (e) {}
}
for (let i21 = 0; i21 < 10; ++i21) {
    try { foo(true, 42); } catch (e) {}
}
for (let i31 = 0; i31 < 100000; ++i31) {
    let v37;
    try { v37 = bar(); } catch (e) {}
    var result = v37;
    if (result != 42) {
        throw "Error: bad result: " + result;
    }
}
try { foo(true, 53); } catch (e) {}
let v46;
try { v46 = bar(); } catch (e) {}
var result = v46;
if (result != 53) {
    throw "Error: bad result at end: " + result;
}
