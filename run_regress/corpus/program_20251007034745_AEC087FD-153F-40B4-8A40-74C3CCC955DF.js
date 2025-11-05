try {
    function foo() {
        let v3;
        try { v3 = isInt32(arguments); } catch (e) {}
        return v3;
    }
    try { noInline(foo); } catch (e) {}
    for (let i7 = 0; i7 < 10000; ++i7) {
        let v13;
        try { v13 = foo(); } catch (e) {}
        var result = v13;
        if (result !== false) {
            throw "Error: bad result: " + result;
        }
    }
} catch(e19) {
}
