function foo(a1, a2, a3) {
    a1[a2] = a3;
    return a1?.[a2];
}
try { noInline(foo); } catch (e) {}
for (let i8 = 0; i8 < 100000; ++i8) {
    const v14 = {};
    let v17;
    try { v17 = foo(v14, "foo", "bar"); } catch (e) {}
    var result = v17;
    if (result !== "bar") {
        throw "Error: bad result: " + result;
    }
}
