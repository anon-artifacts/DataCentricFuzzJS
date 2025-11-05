function foo(a1, a2, a3) {
    var o = { f: 42 };
    if (a3 > 100) {
        o.f = -(a1 + a2);
    }
    return o?.f | 0;
}
try { noInline(foo); } catch (e) {}
for (let i17 = 0; i17 < 10000; ++i17) {
    let v25;
    try { v25 = foo(1073741824, 1073741824, i17); } catch (e) {}
    var result = v25;
}
