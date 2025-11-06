function foo(a1, a2, a3) {
    return (a1 + (a2 * 2)) + (a3 * 3);
}
try { noInline(foo); } catch (e) {}
function bar() {
    let v15;
    try { v15 = foo.apply(this, arguments); } catch (e) {}
    return v15;
}
function baz() {
    let v19;
    try { v19 = bar.apply(this, arguments); } catch (e) {}
    return v19;
}
try { noInline(baz); } catch (e) {}
for (let i22 = 0; i22 < 10000; ++i22) {
    let v31;
    try { v31 = baz(5, 6, 7); } catch (e) {}
    var result = v31;
    if (result != ((5 + (6 * 2)) + (7 * 3))) {
        throw "Error: bad result: " + result;
    }
}
