function foo(a1) {
    return a1?.f?.g;
}
function bar(a5, a6) {
    a5.f = a6;
}
try { noInline(foo); } catch (e) {}
try { noInline(bar); } catch (e) {}
const v11 = { g: 42 };
var o = { f: v11 };
for (let i15 = 0; i15 < 10000; ++i15) {
    const v22 = { g: 42 };
    try { bar(o, v22); } catch (e) {}
    const v26 = { a: 1, b: 2 };
    try { bar(v26, 42); } catch (e) {}
}
for (let i30 = 0; i30 < 10000; ++i30) {
    let v36;
    try { v36 = foo(o); } catch (e) {}
    var result = v36;
    if (result !== 42) {
        throw "Error: bad result: " + result;
    }
}
const v43 = { g: 43 };
let v45;
try { v45 = Object.create(v43); } catch (e) {}
try { bar(o, v45); } catch (e) {}
let v47;
try { v47 = foo(o); } catch (e) {}
var result = v47;
if (result !== 43) {
    throw "Error: bad result at end: " + result;
}
