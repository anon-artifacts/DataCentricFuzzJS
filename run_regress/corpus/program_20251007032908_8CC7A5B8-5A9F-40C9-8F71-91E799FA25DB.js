try {
    function foo(a1) {
        const v6 = a1 > 200 ? 5.5 : 42;
        let v8;
        try { v8 = fiatInt52(v6); } catch (e) {}
        return v8 + 1;
    }
    try { noInline(foo); } catch (e) {}
    for (let i14 = 0; i14 < 1000000; ++i14) {
        let v20;
        try { v20 = foo(); } catch (e) {}
        var result = v20;
        if ((result != 43) && (result != 6.5)) {
            throw "Error: bad result: " + result;
        }
    }
} catch(e29) {
}
