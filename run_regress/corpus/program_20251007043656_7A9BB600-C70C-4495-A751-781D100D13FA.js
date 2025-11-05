var BUGNUMBER = 901351;
var summary = "Behavior when the JSON.parse reviver mutates the holder array";
print((BUGNUMBER + ": ") + summary);
var proxyObj = null;
function f12(a13, a14) {
    if (a13 === "0") {
        const v20 = { c: 17, d: 42 };
        const v22 = new Proxy(v20, {});
        this[1] = proxyObj = v22;
    }
    return a14;
}
var arr = JSON.parse("[0, 1]", f12);
arr[0];
arr[1];
arr[1].c;
arr[1].d;
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
