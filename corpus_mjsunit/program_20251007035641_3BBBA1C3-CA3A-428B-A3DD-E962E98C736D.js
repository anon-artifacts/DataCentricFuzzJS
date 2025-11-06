function f0() {
}
var gTestfile = "preventExtensions-cross-global.js";
var BUGNUMBER = 789897;
var summary = "Object.preventExtensions and Object.isExtensible should work correctly " + "across globals";
const v11 = (BUGNUMBER + ": ") + summary;
try { f0(v11); } catch (e) {}
let v14;
try { v14 = newGlobal(); } catch (e) {}
var otherGlobal = v14;
var obj = {};
const v18 = otherGlobal?.Object;
try { v18.isExtensible(obj); } catch (e) {}
const v21 = otherGlobal?.Object;
try { v21.preventExtensions(obj); } catch (e) {}
const v23 = otherGlobal?.Object;
try { v23.isExtensible(obj); } catch (e) {}
let v26;
try { v26 = otherGlobal.Object(); } catch (e) {}
var objFromOther = v26;
try { Object.isExtensible(objFromOther); } catch (e) {}
try { Object.preventExtensions(objFromOther); } catch (e) {}
try { Object.isExtensible(objFromOther); } catch (e) {}
const v35 = {};
const v36 = {};
let v37;
try { v37 = new Proxy(v35, v36); } catch (e) {}
var proxy = v37;
const v39 = otherGlobal?.Object;
try { v39.isExtensible(proxy); } catch (e) {}
const v42 = otherGlobal?.Object;
try { v42.preventExtensions(proxy); } catch (e) {}
const v44 = otherGlobal?.Object;
try { v44.isExtensible(proxy); } catch (e) {}
let v48;
try { v48 = otherGlobal.evaluate("new Proxy({}, {})"); } catch (e) {}
var proxyFromOther = v48;
try { Object.isExtensible(proxyFromOther); } catch (e) {}
try { Object.preventExtensions(proxyFromOther); } catch (e) {}
try { Object.isExtensible(proxyFromOther); } catch (e) {}
if (typeof f0 === "function") {
    try { f0(true, true); } catch (e) {}
}
try { f0("Tests complete"); } catch (e) {}
