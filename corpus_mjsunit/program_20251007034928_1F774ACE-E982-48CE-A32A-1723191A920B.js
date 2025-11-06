function testAddAnyInconvertibleObject() {
    var count = 0;
    function toString() {
        ++count;
        if (count == 95) {
            return {};
        }
        return "" + count;
    }
    var o = { valueOf: undefined, toString: toString };
    var threw = false;
    try {
        for (let i16 = 0; i16 < 100; i16++) {
            var q = 5 + o;
        }
    } catch(e25) {
        threw = true;
        if (i !== 94) {
            return "expected i === 94, got " + i;
        }
        if (q !== "594") {
            return ((("expected q === '594', got " + q) + " (type ") + typeof q) + ")";
        }
        if (count !== 95) {
            return "expected count === 95, got " + count;
        }
    }
    if (!threw) {
        return "expected throw with 5 + o";
    }
    return "pass";
}
try { testAddAnyInconvertibleObject(); } catch (e) {}
