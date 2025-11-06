function f0() {
}
var gTestfile = "proxy-array-target-length-definition.js";
var BUGNUMBER = 905947;
var summary = "Redefining an array's |length| property when redefining the |length| " + "property on a proxy with an array as target";
f0((BUGNUMBER + ": ") + summary);
var arr = [];
const v17 = new Proxy(arr, {});
var p = v17;
function assertThrowsTypeError(a20) {
    try {
        try { a20(); } catch (e) {}
    } catch(e25) {
        e25 instanceof TypeError;
    }
}
function f30() {
    const v34 = { value: 17, configurable: true };
    try { Object.defineProperty(p, "length", v34); } catch (e) {}
}
f30();
function f38() {
    const v42 = { value: 42, enumerable: true };
    try { Object.defineProperty(p, "length", v42); } catch (e) {}
}
f38();
var pd = Object.getOwnPropertyDescriptor(p, "length");
pd.value;
pd.writable;
pd.enumerable;
pd.configurable;
var ad = Object.getOwnPropertyDescriptor(arr, "length");
ad.value;
ad.writable;
ad.enumerable;
ad.configurable;
if (typeof f0 === "function") {
    f0(true, true);
}
f0("Tests complete");
