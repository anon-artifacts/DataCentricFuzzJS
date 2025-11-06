function opaqueGetByVal1(a1, a2) {
    return a1?.[a2];
}
try { noInline(opaqueGetByVal1); } catch (e) {}
let v9;
try { v9 = Math.pow(2, 31); } catch (e) {}
const IntMaxPlusOne = v9;
function testUninitializedArray() {
    let v14;
    try { v14 = new Array(100); } catch (e) {}
    const target = v14;
    for (let i17 = 0; i17 < 10000; ++i17) {
        let v23;
        try { v23 = opaqueGetByVal1(target, i17); } catch (e) {}
        const value = v23;
        if (value !== undefined) {
            throw (("opaqueGetByVal1() case 1 failed for i = " + i17) + " value = ") + value;
        }
    }
    const t19 = Array?.prototype;
    t19[IntMaxPlusOne] = "Uh!";
    for (let i35 = 0; i35 < 10000; ++i35) {
        let v41;
        try { v41 = opaqueGetByVal1(target, i35); } catch (e) {}
        const value = v41;
        if (value !== undefined) {
            throw (("opaqueGetByVal1() case 2 failed for i = " + i35) + " value = ") + value;
        }
    }
    let v50;
    try { v50 = opaqueGetByVal1(target, IntMaxPlusOne); } catch (e) {}
    const prototypeValue = v50;
    if (prototypeValue !== "Uh!") {
        throw "prototypeValue value = " + value;
    }
}
try { testUninitializedArray(); } catch (e) {}
function opaqueGetByVal2(a59, a60) {
    return a59?.[a60];
}
try { noInline(opaqueGetByVal2); } catch (e) {}
function testAccessOnEmpty() {
    let v65;
    try { v65 = new Array(); } catch (e) {}
    const target = v65;
    for (let i68 = 0; i68 < 10000; ++i68) {
        let v74;
        try { v74 = opaqueGetByVal2(target, i68); } catch (e) {}
        const value = v74;
        if (value !== undefined) {
            throw (("opaqueGetByVal2() case 1 failed for i = " + i68) + " value = ") + value;
        }
    }
    let v83;
    try { v83 = opaqueGetByVal2(target, IntMaxPlusOne); } catch (e) {}
    const prototypeValue = v83;
    if (prototypeValue !== "Uh!") {
        throw "prototypeValue value = " + value;
    }
}
try { testAccessOnEmpty(); } catch (e) {}
