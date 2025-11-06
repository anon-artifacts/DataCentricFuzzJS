function foo(a1) {
    let v3;
    try { v3 = String(a1); } catch (e) {}
    return v3;
}
try { noInline(foo); } catch (e) {}
for (let i7 = 0; i7 < 100000; ++i7) {
    let v14;
    try { v14 = foo(42); } catch (e) {}
    var result = v14;
    if (typeof result != "string") {
        try { describe(result); } catch (e) {}
        throw "Error: result isn't a string";
    }
    if (result != "42") {
        throw "Error: bad result: " + result;
    }
}
