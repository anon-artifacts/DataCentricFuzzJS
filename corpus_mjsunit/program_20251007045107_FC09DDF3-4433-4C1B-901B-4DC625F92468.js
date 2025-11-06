function foo(a1) {
    return typeof a1?.f;
}
function bar(a5, a6) {
    a5.f = a6;
}
try { noInline(foo); } catch (e) {}
try { noInline(bar); } catch (e) {}
var o = {};
for (let i13 = 0; i13 < 5; ++i13) {
    let v21;
    try { v21 = Symbol("Cocoa"); } catch (e) {}
    try { bar(o, v21); } catch (e) {}
}
for (let i24 = 0; i24 < 10000; ++i24) {
    let v30;
    try { v30 = foo(o); } catch (e) {}
    var result = v30;
    if (result != "symbol") {
        throw "Error: bad result: " + result;
    }
}
function f36() {
    return "hello";
}
const v38 = { toString: f36 };
try { bar(o, v38); } catch (e) {}
let v40;
try { v40 = foo(o); } catch (e) {}
var result = v40;
if (result != "object") {
    throw "Error: bad result at end: " + result;
}
