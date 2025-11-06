const v3 = [144951390n];
[v3];
[144951390n,1073741823n,-4294967297n,v3,v3];
try {
    let v8;
    try { v8 = newGlobal("same-compartment"); } catch (e) {}
    var g = v8;
    const v16 = (("this.f = function(a) {" + "assertEq(a instanceof Array, false);") + "a = Array.prototype.slice.call(a);") + "assertEq(a instanceof Array, true); }";
    try { g.eval(v16); } catch (e) {}
    const v21 = [1,2,3];
    try { g.f(v21); } catch (e) {}
    let v23;
    try { v23 = newGlobal(); } catch (e) {}
    var g2 = v23;
    const v25 = (a26) => {
    };
} catch(e27) {
}
