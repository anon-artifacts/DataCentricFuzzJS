let v1;
try { v1 = newGlobal(); } catch (e) {}
var g = v1;
let v4;
try { v4 = g.eval("() => {}"); } catch (e) {}
var w = v4;
let v7;
try { v7 = g.eval("Array"); } catch (e) {}
var v = v7;
function f() {
    try {
        const v10 = {};
        try { Reflect.construct(v, v10, w); } catch (e) {}
    } catch(e13) {
        e13 instanceof TypeError;
    }
}
try { f(); } catch (e) {}
try { f(); } catch (e) {}
try { f(); } catch (e) {}
