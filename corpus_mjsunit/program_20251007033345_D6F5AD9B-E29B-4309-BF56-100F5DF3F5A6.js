function f0() {
}
try { gczeal(4, 1); } catch (e) {}
function g() {
    try {
        return [];
    } catch(e7) {
    }
}
function f() {
    for (let i10 = 0; i10 < 2; i10++) {
        let v16;
        try { v16 = g(); } catch (e) {}
        let v17;
        try { v17 = g(); } catch (e) {}
        var o = { a: v16, a: v17 };
        try { f0(i10); } catch (e) {}
    }
}
try { f(); } catch (e) {}
