function f0() {
}
let v2;
try { v2 = newGlobal(); } catch (e) {}
var g = v2;
let v5;
try { v5 = g.eval("(function (expected) { this.accept = new.target === expected; })"); } catch (e) {}
let f = v5;
for (let i8 = 0; i8 < 1100; i8++) {
    let v14;
    try { v14 = new f(f); } catch (e) {}
    v14?.accept;
}
if (typeof f0 === "function") {
    try { f0(0, 0, "OK"); } catch (e) {}
}
