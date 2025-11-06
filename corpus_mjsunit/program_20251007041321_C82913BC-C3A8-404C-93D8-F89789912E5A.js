try {
    function f0() {
    }
    let v2;
    try { v2 = newGlobal(); } catch (e) {}
    var g1 = v2;
    try { g1.evaluate("function f() { return f.caller; }"); } catch (e) {}
    let v6;
    try { v6 = newGlobal(); } catch (e) {}
    var g2 = v6;
    g2.f = g1?.f;
    try {
        try { g2.evaluate("function g() { 'use strict'; return f(); } g()"); } catch (e) {}
        let v13;
        try { v13 = new Error("failed to throw"); } catch (e) {}
        throw v13;
    } catch(e14) {
        e14?.constructor?.name;
        "expected TypeError accessing strict .caller across globals, got " + e14;
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
    try { f0("Tests complete"); } catch (e) {}
} catch(e28) {
}
