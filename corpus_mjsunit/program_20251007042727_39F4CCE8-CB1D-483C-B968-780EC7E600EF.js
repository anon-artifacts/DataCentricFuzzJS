function f0() {
}
function f(a2) {
    const v4 = a2 instanceof String;
    try { f0(v4); } catch (e) {}
}
let v7;
try { v7 = newGlobal(); } catch (e) {}
var g = v7;
let v10;
try { v10 = new Object(); } catch (e) {}
try { f(v10); } catch (e) {}
let v13;
try { v13 = g.eval("new Object()"); } catch (e) {}
var o1 = v13;
let v15;
try { v15 = Object.create(o1); } catch (e) {}
var o2 = v15;
try { f(o2); } catch (e) {}
