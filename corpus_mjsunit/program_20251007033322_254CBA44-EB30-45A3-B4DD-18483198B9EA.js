function foo() {
    var a = arguments;
    return a?.[0];
}
function bar(a5) {
    let v6;
    try { v6 = foo(a5); } catch (e) {}
    return v6;
}
try { noInline(bar); } catch (e) {}
for (let i10 = 0; i10 < 100000; ++i10) {
    let v17;
    try { v17 = bar(42); } catch (e) {}
    var result = v17;
    if (result != 42) {
        throw "Error: bad result: " + result;
    }
}
