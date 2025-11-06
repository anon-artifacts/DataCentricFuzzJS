function foo(a1, a2) {
    var c = a1 + a2;
    return (c | 0) == c;
}
try { noInline(foo); } catch (e) {}
for (let i11 = 0; i11 < 10000; ++i11) {
    let v19;
    try { v19 = foo(1, 1); } catch (e) {}
    var result = v19;
    if (result !== true) {
        throw "Error: bad result: " + result;
    }
}
let v27;
try { v27 = foo(1073741824, 1073741824); } catch (e) {}
var result = v27;
if (result !== false) {
    throw "Error: bad result at end: " + result;
}
