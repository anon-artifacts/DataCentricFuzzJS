function foo(a1, a2) {
    return a1?.f + a2?.f;
}
try { noInline(foo); } catch (e) {}
for (let i9 = 0; i9 < 100000; ++i9) {
    const v16 = { f: 1 };
    const v18 = { f: 2 };
    let v19;
    try { v19 = foo(v16, v18); } catch (e) {}
    var result = v19;
    if (result != 3) {
        throw "Error: bad result: " + result;
    }
}
const v26 = { f: 2000000000 };
const v28 = { f: 2000000000 };
let v29;
try { v29 = foo(v26, v28); } catch (e) {}
var result = v29;
if (result != 4000000000) {
    throw "Error: bad result: " + result;
}
