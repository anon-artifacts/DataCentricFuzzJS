function foo(a1) {
    return a1 == a1;
}
try { noInline(foo); } catch (e) {}
for (let i6 = 0; i6 < 10000; ++i6) {
    const v14 = 0 / 0;
    let v15;
    try { v15 = foo(v14); } catch (e) {}
    var result = v15;
    if (result !== false) {
        throw "Error: bad result: " + result;
    }
}
