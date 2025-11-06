function foo(a1, a2) {
    const v3 = a1?.f;
    const v4 = a2?.f;
    let v6;
    try { v6 = Math.max(v3, v4); } catch (e) {}
    return v6;
}
try { noInline(foo); } catch (e) {}
function test(a10, a11, a12) {
    const v13 = { f: a10 };
    const v14 = { f: a11 };
    let v15;
    try { v15 = foo(v13, v14); } catch (e) {}
    var result = v15;
    if (result != a12) {
        throw (("Error: expected " + a12) + " but got: ") + result;
    }
}
for (let i24 = 0; i24 < 100000; ++i24) {
    try { test(true, 42, 42); } catch (e) {}
}
try { test(true, 2147483647, 2147483647); } catch (e) {}
try { test(false, 42, 42); } catch (e) {}
try { test(1, 2, 2); } catch (e) {}
try { test(true, true, 1); } catch (e) {}
try { test(1.5, 1.5, 1.5); } catch (e) {}
