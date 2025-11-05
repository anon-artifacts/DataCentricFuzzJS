function foo(a1, a2, a3) {
    return (a1 + (a2 * 2)) + (a3 * 3);
}
try { noInline(foo); } catch (e) {}
function baz() {
    let v15;
    try { v15 = foo.apply(this, arguments); } catch (e) {}
    return v15;
}
try { noInline(baz); } catch (e) {}
for (let i18 = 0; i18 < 10000; ++i18) {
    let v27;
    try { v27 = baz(5, 6, 7); } catch (e) {}
    var result = v27;
    if (result != ((5 + (6 * 2)) + (7 * 3))) {
        throw "Error: bad result: " + result;
    }
}
