function foo(a1, a2) {
    return a1?.f + a2?.f;
}
try { noInline(foo); } catch (e) {}
function test(a9, a10, a11) {
    const v12 = { f: a9 };
    const v13 = { f: a10 };
    let v14;
    try { v14 = foo(v12, v13); } catch (e) {}
    var result = v14;
    if (result != a11) {
        throw (("Error: expected " + a11) + " but got: ") + result;
    }
}
for (let i23 = 0; i23 < 100000; ++i23) {
    try { test(true, 42, 43); } catch (e) {}
}
try { test(true, 2147483647, 2147483648); } catch (e) {}
try { test(false, 42, 42); } catch (e) {}
try { test(1, 2, 3); } catch (e) {}
try { test(true, true, 2); } catch (e) {}
try { test(1.5, 1.5, 3); } catch (e) {}
