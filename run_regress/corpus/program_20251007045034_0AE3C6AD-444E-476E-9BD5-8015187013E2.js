function exponentIsNonNanDouble1(a1, a2) {
    var doubleArray = [4.4];
    return a1 ** doubleArray?.[a2];
}
try { noInline(exponentIsNonNanDouble1); } catch (e) {}
function exponentIsNonNanDouble2(a11, a12) {
    return a11 ** a12?.[0];
}
try { noInline(exponentIsNonNanDouble2); } catch (e) {}
function testExponentIsDoubleConstant() {
    for (let i18 = 0; i18 < 10000; ++i18) {
        let v26;
        try { v26 = exponentIsNonNanDouble1(2, 0); } catch (e) {}
        var result = v26;
        if (result !== 21.112126572366314) {
            throw "Error: exponentIsNonNanDouble1(2, 0) should be 21.112126572366314, was = " + result;
        }
    }
    for (let i33 = 0; i33 < 10000; ++i33) {
        const v42 = [-1.5];
        let v43;
        try { v43 = exponentIsNonNanDouble2(3, v42); } catch (e) {}
        var result = v43;
        if (result !== 0.19245008972987526) {
            throw "Error: exponentIsNonNanDouble2(3, [-1.5]) should be 0.19245008972987526, was = " + result;
        }
    }
}
try { testExponentIsDoubleConstant(); } catch (e) {}
