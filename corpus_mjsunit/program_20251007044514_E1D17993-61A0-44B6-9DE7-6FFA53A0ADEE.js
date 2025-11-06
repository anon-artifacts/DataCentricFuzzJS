var o = { f: 42 };
function foo(a4, a5, a6) {
    if (a4) {
        a5.f = a6;
    }
}
function bar() {
    return o?.f;
}
try { noInline(foo); } catch (e) {}
try { noInline(bar); } catch (e) {}
for (let i13 = 0; i13 < 10; ++i13) {
    try { foo(false); } catch (e) {}
}
for (let i22 = 0; i22 < 10; ++i22) {
    const v29 = {};
    try { foo(true, v29, 42); } catch (e) {}
}
for (let i33 = 0; i33 < 10; ++i33) {
    try { foo(true, o, 42); } catch (e) {}
}
for (let i43 = 0; i43 < 100000; ++i43) {
    let v49;
    try { v49 = bar(); } catch (e) {}
    var result = v49;
    if (result != 42) {
        throw "Error: bad result: " + result;
    }
}
try { foo(true, o, 53); } catch (e) {}
let v58;
try { v58 = bar(); } catch (e) {}
var result = v58;
if (result != 53) {
    throw "Error: bad result at end: " + result;
}
