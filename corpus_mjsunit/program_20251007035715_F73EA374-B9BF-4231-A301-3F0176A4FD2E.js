function foo(a1, a2) {
    return a1 + a2;
}
try { noInline(foo); } catch (e) {}
function bar() {
    let v9;
    try { v9 = foo.apply(null, arguments); } catch (e) {}
    return v9;
}
try { noInline(bar); } catch (e) {}
for (let i12 = 0; i12 < 1000000; ++i12) {
    let v20;
    try { v20 = bar(1, 2); } catch (e) {}
    var result = v20;
    if (result != 3) {
        throw "Error: bad result: " + result;
    }
}
