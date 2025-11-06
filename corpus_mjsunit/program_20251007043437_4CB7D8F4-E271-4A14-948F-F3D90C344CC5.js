function foo(a1, a2) {
    return (a1 + a2) === 2147483648;
}
try { noInline(foo); } catch (e) {}
for (let i9 = 0; i9 < 10000; ++i9) {
    let v17;
    try { v17 = foo(1, 1); } catch (e) {}
    var result = v17;
    if (result !== false) {
        throw "Error: bad result: " + result;
    }
}
let v25;
try { v25 = foo(1073741824, 1073741824); } catch (e) {}
var result = v25;
if (result !== true) {
    throw "Error: bad result at end: " + result;
}
