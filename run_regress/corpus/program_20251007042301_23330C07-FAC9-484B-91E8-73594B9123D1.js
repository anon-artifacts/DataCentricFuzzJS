function f0() {
}
let v5;
try { v5 = raisesException(ReferenceError); } catch (e) {}
try { testLenientAndStrict("undeclared=1", completesNormally, v5); } catch (e) {}
try { testLenientAndStrict("var var_declared; var_declared=1", completesNormally, completesNormally); } catch (e) {}
try { testLenientAndStrict("undeclared_at_compiletime=1", parsesSuccessfully, parsesSuccessfully); } catch (e) {}
function obj() {
    var o = { x: 1, y: 1 };
    const v23 = { writable: false };
    try { Object.defineProperty(o, "x", v23); } catch (e) {}
    return o;
}
function in_strict_with(a27) {
    return ("with(obj()) { (function () { 'use strict'; " + a27) + " })(); }";
}
let v33;
try { v33 = in_strict_with("x = 2; y = 2;"); } catch (e) {}
let v35;
try { v35 = raisesException(TypeError); } catch (e) {}
try { v35(v33); } catch (e) {}
let v39;
try { v39 = in_strict_with("x++;"); } catch (e) {}
let v40;
try { v40 = raisesException(TypeError); } catch (e) {}
try { v40(v39); } catch (e) {}
let v44;
try { v44 = in_strict_with("++x;"); } catch (e) {}
let v45;
try { v45 = raisesException(TypeError); } catch (e) {}
try { v45(v44); } catch (e) {}
let v49;
try { v49 = in_strict_with("x--;"); } catch (e) {}
let v50;
try { v50 = raisesException(TypeError); } catch (e) {}
try { v50(v49); } catch (e) {}
let v54;
try { v54 = in_strict_with("--x;"); } catch (e) {}
let v55;
try { v55 = raisesException(TypeError); } catch (e) {}
try { v55(v54); } catch (e) {}
try { f0(true, true); } catch (e) {}
