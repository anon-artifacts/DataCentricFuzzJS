function foo(a1) {
    return a1?.[0] + 1;
}
try { noInline(foo); } catch (e) {}
let v9;
try { v9 = new Uint32Array(1); } catch (e) {}
var a = v9;
a[0] = -1;
for (let i14 = 0; i14 < 10000; ++i14) {
    let v20;
    try { v20 = foo(a); } catch (e) {}
    var result = v20;
    if (result != 4294967296) {
        throw "Error: bad result: " + result;
    }
}
