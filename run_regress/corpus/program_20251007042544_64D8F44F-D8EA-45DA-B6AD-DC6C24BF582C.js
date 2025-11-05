function foo(a1) {
    return a1?.[1];
}
try { noInline(foo); } catch (e) {}
for (let i6 = 0; i6 < 100000; ++i6) {
    const v13 = [42];
    let v14;
    try { v14 = foo(v13); } catch (e) {}
    var result = v14;
    if (result !== void 0) {
        throw "Error: bad value: " + result;
    }
}
