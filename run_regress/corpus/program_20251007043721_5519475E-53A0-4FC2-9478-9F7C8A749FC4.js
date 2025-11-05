function slice(a1, a2, a3) {
    let v4;
    try { v4 = a1.slice(a2, a3); } catch (e) {}
    return v4;
}
try { noInline(slice); } catch (e) {}
for (let i8 = 0; i8 < 1000000; ++i8) {
    try { slice("Cocoa", 2, 3); } catch (e) {}
}
