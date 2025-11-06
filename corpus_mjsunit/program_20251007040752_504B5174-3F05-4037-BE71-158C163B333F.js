function foo(a1, a2) {
    return a1 + a2;
}
function bar() {
    let v7;
    try { v7 = foo.apply(null, arguments); } catch (e) {}
    return v7;
}
try { noInline(bar); } catch (e) {}
for (let i11 = 0; i11 < 1000000; ++i11) {
    let v19;
    try { v19 = bar(1, 2); } catch (e) {}
    var result = v19;
    if (result != 3) {
        throw "Error: bad result: " + result;
    }
}
