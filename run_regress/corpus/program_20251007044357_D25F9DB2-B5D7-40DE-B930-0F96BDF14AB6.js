function opaqueGetByValKnownArray(a1) {
    let array = [];
    return array?.[a1];
}
try { noInline(opaqueGetByValKnownArray); } catch (e) {}
for (let i8 = 0; i8 < 1000; ++i8) {
    let v15;
    try { v15 = opaqueGetByValKnownArray(0); } catch (e) {}
    if (v15 !== undefined) {
        throw "Failed opaqueGetByValKnownArray(0)";
    }
}
for (let i20 = 0; i20 < 1000; ++i20) {
    const v27 = -1;
    let v28;
    try { v28 = opaqueGetByValKnownArray(v27); } catch (e) {}
    if (v28 !== undefined) {
        throw "Failed opaqueGetByValKnownArray(-1)";
    }
}
