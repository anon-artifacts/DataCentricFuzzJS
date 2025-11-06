function foo(a1, a2, a3, a4) {
    var o = { f: 42 };
    if (a4 > 100) {
        o.f = (((a1 * a2) + 5) * a3) + 5;
    }
    return o?.f | 0;
}
try { noInline(foo); } catch (e) {}
for (let i22 = 0; i22 < 10000; ++i22) {
    let v31;
    try { v31 = foo(65536, 65536, 0, i22); } catch (e) {}
    var result = v31;
}
