function foo(a1, a2) {
    return a1 instanceof a2;
}
try { noInline(foo); } catch (e) {}
for (let i7 = 0; i7 < 10000; ++i7) {
    let v15;
    try { v15 = Symbol("hello"); } catch (e) {}
    let v16;
    try { v16 = foo(v15, Symbol); } catch (e) {}
    var result = v16;
    if (result) {
        throw "Error: bad result: " + result;
    }
}
