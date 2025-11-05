function foo(a1) {
    if (false) {
        return arguments;
    }
    return a1;
}
try { noInline(foo); } catch (e) {}
for (let i7 = 0; i7 < 10000; ++i7) {
    let v13;
    try { v13 = foo(); } catch (e) {}
    var result = v13;
    if (result !== void 0) {
        throw "Error: bad result: " + result;
    }
}
