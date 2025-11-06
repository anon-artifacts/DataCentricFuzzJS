function foo(a1) {
    return a1?.f + 1;
}
function bar(a6, a7) {
    a6.f = a7;
}
try { noInline(foo); } catch (e) {}
try { noInline(bar); } catch (e) {}
var o = {};
for (let i14 = 0; i14 < 5; ++i14) {
    try { bar(o, 4.2); } catch (e) {}
}
for (let i23 = 0; i23 < 10000; ++i23) {
    let v29;
    try { v29 = foo(o); } catch (e) {}
    var result = v29;
    if (result !== 5.2) {
        throw "Error: bad result: " + result;
    }
}
try { bar(o, "hello"); } catch (e) {}
let v37;
try { v37 = foo(o); } catch (e) {}
var result = v37;
if (result !== "hello1") {
    throw "Error: bad result at end: " + result;
}
