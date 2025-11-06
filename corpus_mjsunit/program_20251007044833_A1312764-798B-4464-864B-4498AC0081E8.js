function C(a1, a2) {
}
var f = C.bind(null, 2);
var that = this;
function f9() {
    let v11;
    try { v11 = clone(f, that); } catch (e) {}
    g = v11;
}
try { f9(); } catch (e) {}
