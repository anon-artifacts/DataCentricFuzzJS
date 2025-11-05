function foo(a1) {
    return ("hello" + a1) + "!!";
}
try { noInline(foo); } catch (e) {}
for (let i9 = 0; i9 < 100000; ++i9) {
    let v16;
    try { v16 = foo(" world"); } catch (e) {}
    var result = v16;
    if (typeof result != "string") {
        try { describe(result); } catch (e) {}
        throw "Error: bad result type: " + result;
    }
    if (result != "hello world!!") {
        throw "Error: bad result: " + result;
    }
}
