function foo(a1, a2, a3) {
    var o = { f: 42 };
    o.f = (((a1 * a2) + 5) * a3) + 5;
    return o?.f | 0;
}
try { noInline(foo); } catch (e) {}
for (let i19 = 0; i19 < 10000; ++i19) {
    let v28;
    try { v28 = foo(65536, 65536, 0); } catch (e) {}
    var result = v28;
    if ((result != 5) && (result != 42)) {
        throw "Error: bad result: " + result;
    }
}
