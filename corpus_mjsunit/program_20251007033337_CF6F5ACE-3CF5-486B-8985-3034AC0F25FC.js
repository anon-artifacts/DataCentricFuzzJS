function f0() {
}
var gTestfile = "ownkeys-trap-duplicates.js";
var BUGNUMBER = 1293995;
var summary = (("Scripted proxies' [[OwnPropertyKeys]] should not throw if the trap " + "implementation returns duplicate properties and the object is ") + "non-extensible or has non-configurable properties.") + "Revised (bug 1389752): Throw TypeError for duplicate properties.";
const v15 = (BUGNUMBER + ": ") + summary;
try { f0(v15); } catch (e) {}
const v18 = { a: 1 };
let v20;
try { v20 = Object.preventExtensions(v18); } catch (e) {}
var target = v20;
const v28 = {
    ownKeys(a24) {
        return ["a","a"];
    },
};
let v29;
try { v29 = new Proxy(target, v28); } catch (e) {}
var proxy = v29;
const v31 = () => {
    let v32;
    try { v32 = Object.getOwnPropertyNames(proxy); } catch (e) {}
    return v32;
};
try { v31(); } catch (e) {}
const v36 = { a: 1 };
let v37;
try { v37 = Object.freeze(v36); } catch (e) {}
target = v37;
const v43 = {
    ownKeys(a39) {
        return ["a","a"];
    },
};
let v44;
try { v44 = new Proxy(target, v43); } catch (e) {}
proxy = v44;
const v45 = () => {
    let v46;
    try { v46 = Object.getOwnPropertyNames(proxy); } catch (e) {}
    return v46;
};
try { v45(); } catch (e) {}
if (typeof f0 === "function") {
    try { f0(true, true); } catch (e) {}
}
try { f0("Tests complete"); } catch (e) {}
