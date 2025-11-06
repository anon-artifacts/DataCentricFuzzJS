function foo(a1, a2) {
    if (a1) {
        var tmp = arguments;
    }
    return a2;
}
function bar(a6, a7) {
    let v8;
    try { v8 = foo(a6, a7); } catch (e) {}
    return v8;
}
try { noInline(bar); } catch (e) {}
for (let i12 = 0; i12 < 10000; ++i12) {
    let v20;
    try { v20 = bar(false, 42); } catch (e) {}
    var result = v20;
    if (result != 42) {
        throw "Error: bad result: " + result;
    }
}
