function mathTrunc(a1) {
    let v3;
    try { v3 = Math.trunc(a1); } catch (e) {}
    return v3;
}
try { noInline(mathTrunc); } catch (e) {}
for (let i7 = 0; i7 < 10000; ++i7) {
    var doubleMid = -9901 - 0.6;
    let v18;
    try { v18 = mathTrunc(doubleMid); } catch (e) {}
    var roundedValue = v18;
    if (roundedValue !== -9901) {
        throw (("mathRoundDoesNotCareAboutMinusZero(" + doubleMid) + ") = ") + roundedValue;
    }
}
