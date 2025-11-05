function foo(a1) {
    return a1?.f + " world";
}
function bar(a6, a7) {
    a6.f = a7;
}
try { noInline(foo); } catch (e) {}
try { noInline(bar); } catch (e) {}
var o = {};
for (let i14 = 0; i14 < 5; ++i14) {
    try { bar(o, "hello"); } catch (e) {}
}
for (let i23 = 0; i23 < 10000; ++i23) {
    let v29;
    try { v29 = foo(o); } catch (e) {}
    var result = v29;
    if (result != "hello world") {
        throw "Error: bad result: " + result;
    }
}
function f35() {
    return "hello";
}
const v37 = { toString: f35 };
try { bar(o, v37); } catch (e) {}
let v39;
try { v39 = foo(o); } catch (e) {}
var result = v39;
if (result != "hello world") {
    throw "Error: bad result at end: " + result;
}
