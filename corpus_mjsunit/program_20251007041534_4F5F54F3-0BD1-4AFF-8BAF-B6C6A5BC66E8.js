let v1;
try { v1 = newGlobal(); } catch (e) {}
var g = v1;
function f3(a4) {
    function inner() {
    }
}
var f1 = f3;
try { gczeal(2, 1); } catch (e) {}
let v12;
try { v12 = clone(f1); } catch (e) {}
var f2 = v12;
