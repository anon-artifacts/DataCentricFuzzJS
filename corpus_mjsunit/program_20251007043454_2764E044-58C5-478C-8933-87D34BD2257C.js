let v1;
try { v1 = newGlobal(); } catch (e) {}
var g1 = v1;
const v3 = { sameZoneAs: g1 };
let v4;
try { v4 = newGlobal(v3); } catch (e) {}
var g2 = v4;
function f() {
    let v9;
    try { v9 = Object.create(null); } catch (e) {}
    var o = v9;
    for (const v11 in o) {
    }
}
let v12;
try { v12 = f.toSource(); } catch (e) {}
try { g1.eval(v12); } catch (e) {}
let v14;
try { v14 = f.toSource(); } catch (e) {}
try { g2.eval(v14); } catch (e) {}
for (let i17 = 0; i17 < 10; i17++) {
    try { g1.eval("f()"); } catch (e) {}
    try { g2.eval("f()"); } catch (e) {}
}
