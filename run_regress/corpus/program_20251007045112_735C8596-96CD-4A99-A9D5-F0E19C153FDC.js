function opaqueGetByVal1(a1, a2) {
    return a1?.[a2];
}
try { noInline(opaqueGetByVal1); } catch (e) {}
let v9;
try { v9 = Math.pow(2, 31); } catch (e) {}
const IntMax = v9 - 1;
function testUninitializedArray() {
    let v16;
    try { v16 = new Array(100); } catch (e) {}
    const target = v16;
    for (let i19 = 0; i19 < 10000; ++i19) {
        let v25;
        try { v25 = opaqueGetByVal1(target, i19); } catch (e) {}
        const value = v25;
        if (value !== undefined) {
            throw (("opaqueGetByVal1() case 1 failed for i = " + i19) + " value = ") + value;
        }
    }
    const t19 = Array?.prototype;
    t19[IntMax] = "Uh!";
    for (let i37 = 0; i37 < 10000; ++i37) {
        let v43;
        try { v43 = opaqueGetByVal1(target, i37); } catch (e) {}
        const value = v43;
        if (value !== undefined) {
            throw (("opaqueGetByVal1() case 2 failed for i = " + i37) + " value = ") + value;
        }
    }
    let v52;
    try { v52 = opaqueGetByVal1(target, IntMax); } catch (e) {}
    const prototypeValue = v52;
    if (prototypeValue !== "Uh!") {
        throw "prototypeValue value = " + value;
    }
}
try { testUninitializedArray(); } catch (e) {}
function opaqueGetByVal2(a61, a62) {
    return a61?.[a62];
}
try { noInline(opaqueGetByVal2); } catch (e) {}
function testAccessOnEmpty() {
    let v67;
    try { v67 = new Array(); } catch (e) {}
    const target = v67;
    for (let i70 = 0; i70 < 10000; ++i70) {
        let v76;
        try { v76 = opaqueGetByVal2(target, i70); } catch (e) {}
        const value = v76;
        if (value !== undefined) {
            throw (("opaqueGetByVal2() case 1 failed for i = " + i70) + " value = ") + value;
        }
    }
    let v85;
    try { v85 = opaqueGetByVal2(target, IntMax); } catch (e) {}
    const prototypeValue = v85;
    if (prototypeValue !== "Uh!") {
        throw "prototypeValue value = " + value;
    }
}
try { testAccessOnEmpty(); } catch (e) {}
