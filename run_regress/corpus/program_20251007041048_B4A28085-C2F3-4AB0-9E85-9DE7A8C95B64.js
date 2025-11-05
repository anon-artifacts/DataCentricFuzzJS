function foo(a1, a2, a3, a4) {
    var c = a1 + a2;
    if (a3) {
        c -= a4?.f;
    }
    return c + 1;
}
try { noInline(foo); } catch (e) {}
var o = { f: 42 };
for (let i16 = 0; i16 < 100000; ++i16) {
    let v25;
    try { v25 = foo(2000000000, 2000000000, false, o); } catch (e) {}
    var result = v25;
    if (result != 4000000001) {
        throw "Error: bad result: " + result;
    }
}
