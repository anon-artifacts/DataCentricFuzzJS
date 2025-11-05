try {
    function foo(a1, a2) {
        return a1 + a2;
    }
    try { noInline(foo); } catch (e) {}
    var bStr = "b";
    for (let i9 = 0; i9 < 30; ++i9) {
        bStr = bStr + bStr;
    }
    var effects = 0;
    function f18() {
        effects++;
        return bStr;
    }
    var b = { toString: f18 };
    for (let i23 = 0; i23 < 10000; ++i23) {
        effects = 0;
        let v31;
        try { v31 = foo("a", b); } catch (e) {}
        var result = v31;
        if (result?.length != (("a")?.length + bStr?.length)) {
        }
        if (effects != 1) {
        }
    }
    var a = "a";
    for (let i44 = 0; i44 < 30; ++i44) {
        a = a + a;
    }
    effects = 0;
    var result = null;
    var didThrow = false;
    try {
        let v56;
        try { v56 = foo(a, b); } catch (e) {}
        result = v56;
    } catch(e57) {
        didThrow = true;
    }
    if (!didThrow) {
        throw "Error: did not throw.";
    }
    if (result !== null) {
        throw "Error: did set result to something: " + result;
    }
    if (effects != 1) {
        throw "Error: bad number of effects at end: " + effects;
    }
} catch(e69) {
}
