function isArray(a1) {
    let v3;
    try { v3 = Array.isArray(a1); } catch (e) {}
    return v3;
}
try { noInline(isArray); } catch (e) {}
for (let i7 = 0; i7 < 100000; ++i7) {
    const v13 = {};
    try { isArray(v13); } catch (e) {}
}
