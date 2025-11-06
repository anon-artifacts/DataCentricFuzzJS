function foo(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
    return a1?.f;
}
function bar(a14) {
    let v15;
    try { v15 = foo(a14); } catch (e) {}
    return v15;
}
try { noInline(foo); } catch (e) {}
try { noInline(bar); } catch (e) {}
for (let i20 = 0; i20 < 100000; ++i20) {
    const v27 = { f: 42 };
    try { bar(v27); } catch (e) {}
}
const v31 = { g: 24, f: 43 };
let v32;
try { v32 = bar(v31); } catch (e) {}
var result = v32;
if (result != 43) {
    throw "Error: bad result: " + result;
}
