try {
    let v2;
    try { v2 = evalcx(""); } catch (e) {}
    a = v2;
    for (let i5 = 0; i5 < 1000; i5++) {
        a[i5] = i5;
    }
    function foo(a13) {
        for (const v14 in a13) {
            var summary = "Basic support for iterable objects and for-in";
        }
    }
    try { schedulegc(1234); } catch (e) {}
    try { foo(a); } catch (e) {}
} catch(e22) {
}
