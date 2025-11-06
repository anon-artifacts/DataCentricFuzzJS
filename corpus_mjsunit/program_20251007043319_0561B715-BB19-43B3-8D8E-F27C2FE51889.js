function uint32ToNumberMinusOne() {
    return -1 >>> 0;
}
try { noInline(uint32ToNumberMinusOne); } catch (e) {}
function uint32ToNumberMinusOnePlusInteger(a8) {
    return (-1 >>> 0) + a8;
}
try { noInline(uint32ToNumberMinusOnePlusInteger); } catch (e) {}
function inlineMinusOne() {
    return -1;
}
function uint32ToNumberOnHiddenMinusOne() {
    let v19;
    try { v19 = inlineMinusOne(); } catch (e) {}
    return v19 >>> 0;
}
try { noInline(uint32ToNumberOnHiddenMinusOne); } catch (e) {}
function uint32ToNumberOnHiddenMinusOnePlusInteger(a24) {
    let v25;
    try { v25 = inlineMinusOne(); } catch (e) {}
    return (v25 >>> 0) + a24;
}
try { noInline(uint32ToNumberOnHiddenMinusOnePlusInteger); } catch (e) {}
function inlineLargeNegativeNumber1() {
    return -2251799813685248;
}
function inlineLargeNegativeNumber2() {
    return -2251799813685249;
}
function inlineLargeNegativeNumber3() {
    return -2251799813685250;
}
function uint32ToNumberOnHiddenLargeNegativeNumber1() {
    let v40;
    try { v40 = inlineLargeNegativeNumber1(); } catch (e) {}
    return v40 >>> 0;
}
try { noInline(uint32ToNumberOnHiddenLargeNegativeNumber1); } catch (e) {}
function uint32ToNumberOnHiddenLargeNegativeNumber2() {
    let v45;
    try { v45 = inlineLargeNegativeNumber2(); } catch (e) {}
    return v45 >>> 0;
}
try { noInline(uint32ToNumberOnHiddenLargeNegativeNumber2); } catch (e) {}
function uint32ToNumberOnHiddenLargeNegativeNumber3() {
    let v50;
    try { v50 = inlineLargeNegativeNumber3(); } catch (e) {}
    return v50 >>> 0;
}
try { noInline(uint32ToNumberOnHiddenLargeNegativeNumber3); } catch (e) {}
for (let i55 = 0; i55 < 1000000; ++i55) {
    let v61;
    try { v61 = uint32ToNumberMinusOne(); } catch (e) {}
    if (v61 !== 4294967295) {
        throw "Failed uint32ToNumberMinusOne()";
    }
    let v66;
    try { v66 = uint32ToNumberMinusOnePlusInteger(1); } catch (e) {}
    if (v66 !== 4294967296) {
        throw "Failed uint32ToNumberMinusOnePlusOne()";
    }
    let v70;
    try { v70 = uint32ToNumberOnHiddenMinusOne(); } catch (e) {}
    if (v70 !== 4294967295) {
        throw "Failed uint32ToNumberOnHiddenMinusOne()";
    }
    let v75;
    try { v75 = uint32ToNumberOnHiddenMinusOnePlusInteger(1); } catch (e) {}
    if (v75 !== 4294967296) {
        throw "Failed uint32ToNumberOnHiddenMinusOnePlusInteger()";
    }
    let v79;
    try { v79 = uint32ToNumberOnHiddenLargeNegativeNumber1(); } catch (e) {}
    if (v79 !== 0) {
        throw "Failed uint32ToNumberOnHiddenLargeNegativeNumber1()";
    }
    let v83;
    try { v83 = uint32ToNumberOnHiddenLargeNegativeNumber2(); } catch (e) {}
    if (v83 !== 4294967295) {
        throw "Failed uint32ToNumberOnHiddenLargeNegativeNumber2()";
    }
    let v87;
    try { v87 = uint32ToNumberOnHiddenLargeNegativeNumber3(); } catch (e) {}
    if (v87 !== 4294967294) {
        throw "Failed uint32ToNumberOnHiddenLargeNegativeNumber3()";
    }
}
