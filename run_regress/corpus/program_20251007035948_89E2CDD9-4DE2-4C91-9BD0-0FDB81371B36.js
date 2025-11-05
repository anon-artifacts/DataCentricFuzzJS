function foo(a1, a2) {
    var q = a2?.q;
    if (a1) {
        return q?.f;
    }
    return q?.g;
}
try { noInline(foo); } catch (e) {}
const v11 = { f: 41, g: 42 };
var o = { q: v11 };
for (let i15 = 0; i15 < 100000; ++i15) {
    let v22;
    try { v22 = foo(false, o); } catch (e) {}
    var result = v22;
    if (result != 42) {
        throw "Error: bad result: " + result;
    }
}
let v29;
try { v29 = foo(true, o); } catch (e) {}
var result = v29;
if (result != 41) {
    throw "Error: bad result at end: " + result;
}
