function sqrtOnInteger(a1) {
    let v3;
    try { v3 = Math.sqrt(a1); } catch (e) {}
    return v3;
}
try { noInline(sqrtOnInteger); } catch (e) {}
function testSquareRoot16() {
    for (let i8 = 0; i8 < 10000; ++i8) {
        let v15;
        try { v15 = sqrtOnInteger(16); } catch (e) {}
        var result = v15;
        if (result !== 4) {
            throw ("sqrtOnInteger(16) = " + result) + ", expected 4";
        }
    }
}
try { testSquareRoot16(); } catch (e) {}
const v25 = -4;
let v27;
try { v27 = sqrtOnDouble(v25); } catch (e) {}
var sqrtOnIntegerNegativeNumber = v27;
let v30;
try { v30 = isNaN(sqrtOnIntegerNegativeNumber); } catch (e) {}
if (!v30) {
    throw ("sqrtOnDouble(-4) = " + sqrtOnIntegerNegativeNumber) + ", expected NaN";
}
const v37 = Math?.PI;
let v38;
try { v38 = sqrtOnInteger(v37); } catch (e) {}
var sqrtOnIntegerFallback = v38;
if (sqrtOnIntegerFallback != 1.7724538509055159) {
    throw ("sqrtOnInteger(Math.PI) = " + sqrtOnIntegerFallback) + ", expected 1.7724538509055159";
}
function sqrtOnDouble(a47) {
    let v48;
    try { v48 = Math.sqrt(a47); } catch (e) {}
    return v48;
}
try { noInline(sqrtOnDouble); } catch (e) {}
function testSquareRootDouble() {
    for (let i52 = 0; i52 < 10000; ++i52) {
        const v58 = Math?.LN2;
        let v59;
        try { v59 = sqrtOnInteger(v58); } catch (e) {}
        var result = v59;
        if (result !== 0.8325546111576977) {
            throw ("sqrtOnInteger(Math.LN2) = " + result) + ", expected 0.8325546111576977";
        }
    }
}
try { testSquareRootDouble(); } catch (e) {}
const v69 = -Math?.PI;
let v70;
try { v70 = sqrtOnDouble(v69); } catch (e) {}
var sqrtOnDoubleNegativeNumber = v70;
let v72;
try { v72 = isNaN(sqrtOnDoubleNegativeNumber); } catch (e) {}
if (!v72) {
    throw ("sqrtOnDouble(-Math.PI) = " + sqrtOnDoubleNegativeNumber) + ", expected NaN";
}
let v79;
try { v79 = sqrtOnDouble(4); } catch (e) {}
var sqrtOnDoubleFallback = v79;
if (sqrtOnDoubleFallback !== 2) {
    throw ("sqrtOnDouble(4) = " + sqrtOnDoubleFallback) + ", expected 2";
}
