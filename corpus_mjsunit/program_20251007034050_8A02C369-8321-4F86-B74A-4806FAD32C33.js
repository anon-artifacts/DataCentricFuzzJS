function testBitOrInconvertibleObjectInconvertibleObject() {
    var count1 = 0;
    function toString1() {
        ++count1;
        if (count1 == 95) {
            return {};
        }
        return count1;
    }
    var o1 = { valueOf: undefined, toString: toString1 };
    var count2 = 0;
    function toString2() {
        ++count2;
        if (count2 == 95) {
            return {};
        }
        return count2;
    }
    var o2 = { valueOf: undefined, toString: toString2 };
    var threw = false;
    try {
        for (let i24 = 0; i24 < 100; i24++) {
            var q = o1 | o2;
        }
    } catch(e32) {
        threw = true;
        if (i !== 94) {
            return "expected i === 94, got " + i;
        }
        if (q !== 94) {
            return "expected q === 94, got " + q;
        }
        if (count1 !== 95) {
            return "expected count1 === 95, got " + count1;
        }
        if (count2 !== 94) {
            return "expected count2 === 94, got " + count2;
        }
    }
    if (!threw) {
        return "expected throw with o1 | o2";
    }
    return "pass";
}
try { testBitOrInconvertibleObjectInconvertibleObject(); } catch (e) {}
