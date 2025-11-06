try {
    function test() {
        function f1() {
            try {
            } catch(e3) {
                return true;
            }
        }
        let v5;
        try { v5 = f1(); } catch (e) {}
        var passed = v5;
        function fn() {
            passed &= qux === 456;
        }
        let qux = 456;
        try { fn(); } catch (e) {}
        return passed;
    }
    let v14;
    try { v14 = test(); } catch (e) {}
    if (!v14) {
        let v18;
        try { v18 = new Error("Test failed"); } catch (e) {}
        throw v18;
    }
} catch(e19) {
}
