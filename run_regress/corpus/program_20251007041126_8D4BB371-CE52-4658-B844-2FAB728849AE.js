function foo(a1, a2, a3, a4) {
    var x = a1 + a2;
    if (a3) {
        var y = x;
        var result = a4?.f?.f;
        var z = y + 1;
        return result;
    }
}
try { noInline(foo); } catch (e) {}
for (let i17 = 0; i17 < 100000; ++i17) {
    const v27 = { f: 42 };
    const v28 = { f: v27 };
    let v29;
    try { v29 = foo(1, 2, true, v28); } catch (e) {}
    var result = v29;
    if (result != 42) {
        throw "Error: bad result: " + result;
    }
}
