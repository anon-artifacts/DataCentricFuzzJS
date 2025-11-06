function f0() {
}
var gTestfile = "element-setting-ToNumber-detaches.js";
var BUGNUMBER = 1001547;
var summary = "Don't assert assigning into memory detached while converting the value to " + "assign into a number";
const v11 = (BUGNUMBER + ": ") + summary;
try { f0(v11); } catch (e) {}
let v15;
try { v15 = new ArrayBuffer(64); } catch (e) {}
var ab = v15;
let v18;
try { v18 = new Uint32Array(ab); } catch (e) {}
var ta = v18;
const v24 = {
    valueOf() {
        try { detachArrayBuffer(ab); } catch (e) {}
        return 5;
    },
};
ta[4] = v24;
if (typeof f0 === "function") {
    try { f0(true, true); } catch (e) {}
}
try { f0("Tests complete"); } catch (e) {}
