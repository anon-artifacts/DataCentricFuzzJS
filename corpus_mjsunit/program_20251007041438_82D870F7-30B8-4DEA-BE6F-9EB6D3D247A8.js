function testBitOrInconvertibleObjectInconvertibleObject() {
    var o1 = {};
    var count2 = 0;
    function toString2() {
        ++count2;
        if (count2 == 95) {
            return {};
        }
    }
    var o2 = { toString: toString2 };
    try {
        for (let i13 = 0; i13 < 100; i13++) {
            var q = o1 | o2;
        }
    } catch(e21) {
        if (i !== 94) {
            let v26;
            try { v26 = gc(); } catch (e) {}
            return v26;
        }
        this?.bar?.foo ^ this;
    }
}
try { testBitOrInconvertibleObjectInconvertibleObject(); } catch (e) {}
