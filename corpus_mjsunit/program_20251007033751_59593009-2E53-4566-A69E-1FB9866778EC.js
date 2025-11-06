function foo(a1) {
    return typeof a1?.f === "symbol";
}
function bar(a7, a8) {
    a7.f = a8;
}
try { noInline(foo); } catch (e) {}
try { noInline(bar); } catch (e) {}
var o = {};
for (let i15 = 0; i15 < 5; ++i15) {
    let v23;
    try { v23 = Symbol("Cocoa"); } catch (e) {}
    try { bar(o, v23); } catch (e) {}
}
for (let i26 = 0; i26 < 10000; ++i26) {
    let v32;
    try { v32 = foo(o); } catch (e) {}
    var result = v32;
    if (result !== true) {
        throw "Error: bad result: " + result;
    }
}
try { bar(o, "hello"); } catch (e) {}
let v40;
try { v40 = foo(o); } catch (e) {}
var result = v40;
let v42;
try { v42 = foo(o); } catch (e) {}
if ((result = v42) !== false) {
    throw "Error: bad result at end (false): " + result;
}
