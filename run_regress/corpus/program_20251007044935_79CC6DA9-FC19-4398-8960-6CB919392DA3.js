function exponentIsNonNanDouble1(a1, a2) {
    var doubleArray = [4.4];
    const v6 = doubleArray?.[a2];
    let v8;
    try { v8 = Math.pow(a1, v6); } catch (e) {}
    return v8;
}
try { noInline(exponentIsNonNanDouble1); } catch (e) {}
function exponentIsNonNanDouble2(a12, a13) {
    const v14 = a13?.[0];
    let v16;
    try { v16 = Math.pow(a12, v14); } catch (e) {}
    return v16;
}
try { noInline(exponentIsNonNanDouble2); } catch (e) {}
function testExponentIsDoubleConstant() {
    for (let i20 = 0; i20 < 10000; ++i20) {
        let v28;
        try { v28 = exponentIsNonNanDouble1(2, 0); } catch (e) {}
        var result = v28;
        if (result !== 21.112126572366314) {
            throw "Error: exponentIsNonNanDouble1(2, 0) should be 21.112126572366314, was = " + result;
        }
    }
    for (let i35 = 0; i35 < 10000; ++i35) {
        const v44 = [-1.5];
        let v45;
        try { v45 = exponentIsNonNanDouble2(3, v44); } catch (e) {}
        var result = v45;
        if (result !== 0.19245008972987526) {
            throw "Error: exponentIsNonNanDouble2(3, [-1.5]) should be 0.19245008972987526, was = " + result;
        }
    }
}
try { testExponentIsDoubleConstant(); } catch (e) {}
