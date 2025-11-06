try {
    function foo() {
        let v3;
        try { v3 = Math.fround(42); } catch (e) {}
        let v5;
        try { v5 = fiatInt52(v3); } catch (e) {}
        return v5 + 1;
    }
    try { noInline(foo); } catch (e) {}
    for (let i11 = 0; i11 < 1000000; ++i11) {
        let v17;
        try { v17 = foo(); } catch (e) {}
        var result = v17;
        if (result != (42 + 1)) {
            throw "Error: bad result: " + result;
        }
    }
} catch(e25) {
}
