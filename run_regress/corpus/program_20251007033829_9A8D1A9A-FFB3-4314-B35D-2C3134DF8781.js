function foo(a1) {
    let v2;
    try { v2 = new a1(); } catch (e) {}
    return v2;
}
try { noInline(foo); } catch (e) {}
for (let i6 = 0; i6 < 10000; ++i6) {
    try { foo(Array); } catch (e) {}
}
var didCall = false;
function f16() {
    didCall = true;
}
try { foo(f16); } catch (e) {}
if (!didCall) {
    throw "Error: didn't call my function.";
}
