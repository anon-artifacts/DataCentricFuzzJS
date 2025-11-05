function performString(a1) {
    let v3;
    try { v3 = String(a1); } catch (e) {}
    return v3;
}
try { noInline(performString); } catch (e) {}
for (let i7 = 0; i7 < 10000; ++i7) {
    const v14 = Symbol?.iterator;
    let v15;
    try { v15 = performString(v14); } catch (e) {}
    var result = v15;
    if (result !== "Symbol(Symbol.iterator)") {
        const v21 = "bad value: " + result;
        let v22;
        try { v22 = new Error(v21); } catch (e) {}
        throw v22;
    }
}
