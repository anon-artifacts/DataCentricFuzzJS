function foo(a1) {
    if (a1?.f) {
        return "yes";
    } else {
        return "no";
    }
}
try { noInline(foo); } catch (e) {}
function test(a8, a9) {
    const v10 = { f: a8 };
    let v11;
    try { v11 = foo(v10); } catch (e) {}
    var result = v11;
    if (result != a9) {
        throw (("Error: bad result for " + a8) + ": ") + result;
    }
}
for (let i20 = 0; i20 < 10000; ++i20) {
    try { test(1.5, "yes"); } catch (e) {}
    try { test(0, "no"); } catch (e) {}
    try { test(true, "yes"); } catch (e) {}
    try { test(false, "no"); } catch (e) {}
}
try { test("yes", "yes"); } catch (e) {}
