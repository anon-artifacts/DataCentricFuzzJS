var BUGNUMBER = 668024;
var summary = "Array.prototype.splice should define, not set, the elements of the array " + "it returns";
print((BUGNUMBER + ": ") + summary);
const v12 = Object.prototype;
function f14(a15) {
    const v18 = new Error("setter on Object.prototype called!");
    throw v18;
}
function f19() {
    return "fnord";
}
Object.defineProperty(v12, 2, { set: f14, get: f19, enumerable: false, configurable: true });
var arr = [0,1,2,3,4,5];
var removed = arr.splice(0, 6);
arr.length;
removed.length;
removed[0];
removed[1];
removed[2];
removed[3];
removed[4];
removed[5];
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
