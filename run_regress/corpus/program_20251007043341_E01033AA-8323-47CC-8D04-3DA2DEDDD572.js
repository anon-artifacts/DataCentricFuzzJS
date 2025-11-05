try {
    let v1;
    try { v1 = newGlobal(); } catch (e) {}
    var g = v1;
    var target = {};
    const v13 = {
        get(a7, a8, a9) {
            return "vega";
        },
    };
    let v14;
    try { v14 = new Proxy(target, v13); } catch (e) {}
    var P = v14;
    g.W = P;
    try { g.eval("var O = Object.create(W);"); } catch (e) {}
    var wO = g?.O;
    try { g.eval("O.X"); } catch (e) {}
} catch(e23) {
}
