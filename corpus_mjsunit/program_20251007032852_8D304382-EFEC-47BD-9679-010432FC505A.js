try {
    let v2;
    try { v2 = new Float64Array(1); } catch (e) {}
    var array = v2;
    array[0] = 42;
    function foo() {
        const v6 = array?.[0];
        let v8;
        try { v8 = fiatInt52(v6); } catch (e) {}
        return v8 + 1;
    }
    try { noInline(foo); } catch (e) {}
    for (let i14 = 0; i14 < 1000000; ++i14) {
        let v20;
        try { v20 = foo(); } catch (e) {}
        var result = v20;
        if (result != 43) {
            throw "Error: bad result: " + result;
        }
    }
} catch(e26) {
}
