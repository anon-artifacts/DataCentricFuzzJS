function isSymbol(a1) {
    return typeof a1 === "symbol";
}
try { noInline(isSymbol); } catch (e) {}
for (let i8 = 0; i8 < 10000; ++i8) {
    let v16;
    try { v16 = Symbol("Cocoa"); } catch (e) {}
    let v17;
    try { v17 = isSymbol(v16); } catch (e) {}
    if (!v17) {
        let v21;
        try { v21 = new Error("out"); } catch (e) {}
        throw v21;
    }
}
