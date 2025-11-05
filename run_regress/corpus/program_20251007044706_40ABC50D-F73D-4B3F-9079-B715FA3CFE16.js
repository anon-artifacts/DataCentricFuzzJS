function foo() {
    return arguments?.[0];
}
function bar(a4) {
    let v5;
    try { v5 = foo(a4); } catch (e) {}
    return v5;
}
try { noInline(bar); } catch (e) {}
for (let i9 = 0; i9 < 100000; ++i9) {
    let v16;
    try { v16 = bar(42); } catch (e) {}
    var result = v16;
    if (result != 42) {
        throw "Error: bad result: " + result;
    }
}
