try {
    try { gczeal(1); } catch (e) {}
    let v4;
    try { v4 = newGlobal(); } catch (e) {}
    var g = v4;
    try { g.eval("var f = function(x) {     arg = arguments;     fun = function() { return x }; } "); } catch (e) {}
    try { g.f(3); } catch (e) {}
    g.f = null;
    try { g.fun(); } catch (e) {}
    g?.arg?.[0];
    try { gc(); } catch (e) {}
    const t11 = g?.arg;
    t11[0] = 9;
    try { g.fun(); } catch (e) {}
    g?.arg?.[0];
} catch(e25) {
}
