function f0() {
}
var BUGNUMBER = 901351;
var summary = "Behavior when the JSON.parse reviver mutates the holder array";
f0((BUGNUMBER + ": ") + summary);
var proxyObj = null;
function f12(a13, a14) {
    if (a13 === "0") {
        let v19;
        try { v19 = newGlobal(); } catch (e) {}
        let v20;
        try { v20 = v19.evaluate("({ c: 17, d: 42 })"); } catch (e) {}
        this[1] = proxyObj = v20;
    }
    return a14;
}
let v23;
try { v23 = JSON.parse("[0, 1]", f12); } catch (e) {}
var arr = v23;
arr?.[0];
arr?.[1];
arr?.[1]?.c;
arr?.[1]?.d;
if (typeof f0 === "function") {
    f0(true, true);
}
f0("Tests complete");
