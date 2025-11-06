function func(a1) {
    const v4 = a1 > 1;
    let v6;
    try { v6 = Math.pow(NaN, v4); } catch (e) {}
    let v8;
    try { v8 = fiatInt52(v6); } catch (e) {}
    return v8;
}
try { noInline(func); } catch (e) {}
function test(a12) {
    for (let i14 = 0; i14 < 10000; ++i14) {
        let v21;
        try { v21 = a12(0); } catch (e) {}
        if (v21 != 1) {
            throw "Wrong expected value";
        }
        let v26;
        try { v26 = a12(1); } catch (e) {}
        if (v26 != 1) {
            throw "Wrong expected value";
        }
    }
}
try { test(func); } catch (e) {}
