var o = { f: 42 };
function foo(a4) {
    o.f = a4;
}
function bar() {
    return o?.f;
}
try { noInline(foo); } catch (e) {}
try { noInline(bar); } catch (e) {}
try { foo(42); } catch (e) {}
try { foo(42); } catch (e) {}
for (let i15 = 0; i15 < 100000; ++i15) {
    let v21;
    try { v21 = bar(); } catch (e) {}
    var result = v21;
    if (result != 42) {
        throw "Error: bad result: " + result;
    }
}
try { foo(53); } catch (e) {}
let v29;
try { v29 = bar(); } catch (e) {}
var result = v29;
if (result != 53) {
    throw "Error: bad result at end: " + result;
}
