function foo(a1, a2) {
    return a1?.f / a2?.f;
}
try { noInline(foo); } catch (e) {}
function test(a9, a10, a11) {
    const v12 = { f: a9 };
    const v13 = { f: a10 };
    let v14;
    try { v14 = foo(v12, v13); } catch (e) {}
    var result = v14;
    if (result != a11) {
        throw (((((("Error: " + a9) + " / ") + a10) + " should be ") + a11) + " but was ") + result;
    }
}
for (let i29 = 1; i29 < 101; ++i29) {
    const v36 = i29 * 2;
    try { test(v36, i29, 2); } catch (e) {}
}
try { test(9, 3, 3); } catch (e) {}
try { test(12, 4, 3); } catch (e) {}
const v48 = -32;
const v51 = -4;
try { test(v48, 8, v51); } catch (e) {}
const v54 = -21;
const v57 = -3;
try { test(v54, 7, v57); } catch (e) {}
try { test(7, 2, 3.5); } catch (e) {}
