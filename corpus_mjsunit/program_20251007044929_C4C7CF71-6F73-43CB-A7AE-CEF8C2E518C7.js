const v1 = { newCompartment: true };
let v3;
try { v3 = newGlobal(v1); } catch (e) {}
var global = v3;
let v6;
try { v6 = global.eval("(function() {})"); } catch (e) {}
var fun = v6;
const v9 = {};
let v10;
try { v10 = new Proxy(fun, v9); } catch (e) {}
var p = v10;
try { isConstructor(p); } catch (e) {}
typeof p;
try { isConstructor(p); } catch (e) {}
typeof p;
const v21 = () => {
    try { p(); } catch (e) {}
};
try { v21(); } catch (e) {}
const v25 = () => {
    try { new p(); } catch (e) {}
};
try { v25(); } catch (e) {}
