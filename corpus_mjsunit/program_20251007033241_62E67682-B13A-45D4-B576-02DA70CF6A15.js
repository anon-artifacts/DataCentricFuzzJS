try {
    let v2;
    try { v2 = newGlobal("same-compartment"); } catch (e) {}
    var g = v2;
    const v10 = (("this.f = function(a) {" + "assertEq(a instanceof Array, false);") + "a = Array.prototype.slice.call(a);") + "assertEq(a instanceof Array, true); }";
    try { g.eval(v10); } catch (e) {}
    const v15 = [1,2,3];
    try { g.f(v15); } catch (e) {}
    let v17;
    try { v17 = newGlobal(); } catch (e) {}
    var g2 = v17;
    let v20;
    try { v20 = g2.Array(10); } catch (e) {}
    g2.a = v20;
    g2?.a instanceof Array;
    const v25 = g2?.a;
    const v26 = Array?.prototype;
    let v27;
    try { v27 = v26.slice(v25); } catch (e) {}
    g2.a = v27;
    g2?.a instanceof Array;
} catch(e31) {
}
