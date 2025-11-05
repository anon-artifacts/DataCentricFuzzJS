function foo(a1, a2, a3) {
    var o = { f: 42 };
    o.f = (a1 * a2) * a3;
    return o?.f | 0;
}
try { noInline(foo); } catch (e) {}
for (let i15 = 0; i15 < 10000; ++i15) {
    let v24;
    try { v24 = foo(65536, 65536, 0); } catch (e) {}
    var result = v24;
    if ((result != 0) && (result != 42)) {
        throw "Error: bad result: " + result;
    }
}
