function foo(a1) {
    var result = 0;
    for (let i5 = 0; i5 < 100; ++i5) {
        result += a1?.f;
    }
    return result;
}
try { noInline(foo); } catch (e) {}
var o = { f: 1, g: 2 };
var p = { g: 1, f: 2 };
for (let i23 = 0; i23 < 10000; ++i23) {
    const v31 = i23 & 1 ? o : p;
    let v32;
    try { v32 = foo(v31); } catch (e) {}
    var result = v32;
    if (result != (i23 & 1 ? 100 : 200)) {
        throw (("Error: bad result for i = " + i23) + ": ") + result;
    }
}
var q = { g: 3, h: 4, f: 5 };
let v50;
try { v50 = foo(q); } catch (e) {}
var result = v50;
if (result != 500) {
    throw "Error: bad result at end: " + result;
}
