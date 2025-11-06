function foo(a1, a2, a3) {
    var o = { f: 42 };
    o.f = (a1 + a2) + a3;
    return o?.f | 0;
}
try { noInline(foo); } catch (e) {}
for (let i15 = 0; i15 < 10000; ++i15) {
    const v24 = -2000000000;
    let v25;
    try { v25 = foo(2000000000, 2000000000, v24); } catch (e) {}
    var result = v25;
    if ((result != 2000000000) && (result != 42)) {
        throw "Error: bad result: " + result;
    }
}
