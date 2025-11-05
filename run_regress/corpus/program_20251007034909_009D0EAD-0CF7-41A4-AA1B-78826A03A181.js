function mathPowWrapper(a1, a2) {
    let v4;
    try { v4 = Math.pow(a1, a2); } catch (e) {}
    return v4;
}
try { noInline(mathPowWrapper); } catch (e) {}
function testChangingMathPow() {
    var result = 0;
    for (let i11 = 0; i11 < 10000; ++i11) {
        let v19;
        try { v19 = mathPowWrapper(3, 2); } catch (e) {}
        result += v19;
    }
    function f20(a21, a22) {
        return a21 + a22;
    }
    Math.pow = f20;
    for (let i26 = 0; i26 < 10000; ++i26) {
        let v34;
        try { v34 = mathPowWrapper(3, 2); } catch (e) {}
        result += v34;
    }
    if (result !== 140000) {
        throw ("Result = " + result) + ", expected 140000";
    }
}
try { testChangingMathPow(); } catch (e) {}
