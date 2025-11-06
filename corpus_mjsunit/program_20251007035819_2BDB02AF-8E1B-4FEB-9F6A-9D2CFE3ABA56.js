function f0() {
}
function Q(a2) {
    let v3;
    try { v3 = f0(); } catch (e) {}
    v3?.match;
}
function options() {
    return "methodjit";
}
try { gczeal(2); } catch (e) {}
for (i = 0; i < 100; ++i) {
    const v18 = [];
    let v19;
    try { v19 = Q(42, v18); } catch (e) {}
    try { Q(v19); } catch (e) {}
}
