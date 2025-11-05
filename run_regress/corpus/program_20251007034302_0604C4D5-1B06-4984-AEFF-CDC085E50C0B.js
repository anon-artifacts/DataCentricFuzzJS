function opaqueGetByVal1(a1, a2) {
    return a1?.[a2];
}
try { noInline(opaqueGetByVal1); } catch (e) {}
function testUninitializedArray() {
    let v9;
    try { v9 = new Array(100); } catch (e) {}
    const target = v9;
    for (let i12 = 0; i12 < 10000; ++i12) {
        let v18;
        try { v18 = opaqueGetByVal1(target, i12); } catch (e) {}
        const value = v18;
        if (value !== undefined) {
            throw (("opaqueGetByVal1() case 1 failed for i = " + i12) + " value = ") + value;
        }
    }
    const t16 = Array?.prototype;
    t16[-1] = "Uh!";
    for (let i32 = 0; i32 < 10000; ++i32) {
        let v38;
        try { v38 = opaqueGetByVal1(target, i32); } catch (e) {}
        const value = v38;
        if (value !== undefined) {
            throw (("opaqueGetByVal1() case 2 failed for i = " + i32) + " value = ") + value;
        }
    }
    const v48 = -1;
    let v49;
    try { v49 = opaqueGetByVal1(target, v48); } catch (e) {}
    const prototypeValue = v49;
    if (prototypeValue !== "Uh!") {
        throw "prototypeValue value = " + value;
    }
}
try { testUninitializedArray(); } catch (e) {}
function opaqueGetByVal2(a58, a59) {
    return a58?.[a59];
}
try { noInline(opaqueGetByVal2); } catch (e) {}
function testAccessOnEmpty() {
    let v64;
    try { v64 = new Array(); } catch (e) {}
    const target = v64;
    for (let i67 = 0; i67 < 10000; ++i67) {
        let v73;
        try { v73 = opaqueGetByVal2(target, i67); } catch (e) {}
        const value = v73;
        if (value !== undefined) {
            throw (("opaqueGetByVal2() case 1 failed for i = " + i67) + " value = ") + value;
        }
    }
    const v83 = -1;
    let v84;
    try { v84 = opaqueGetByVal2(target, v83); } catch (e) {}
    const prototypeValue = v84;
    if (prototypeValue !== "Uh!") {
        throw "prototypeValue value = " + value;
    }
}
try { testAccessOnEmpty(); } catch (e) {}
