function f1(a2) {
    const v4 = { sameCompartmentAs: this };
    let v6;
    try { v6 = newGlobal(v4); } catch (e) {}
    var g = v6;
    const v10 = { value: g };
    const v11 = g?.Object;
    try { v11.defineProperty(arguments, "0", v10); } catch (e) {}
}
try { f1(0); } catch (e) {}
