var BUGNUMBER = 1312948;
var summary = "Freezing a dictionary mode object with a length property should make Object.isFrozen report true";
print((BUGNUMBER + ": ") + summary);
const t2 = Array.prototype;
delete t2.slice;
Object.freeze(Array.prototype);
Object.isFrozen(Array.prototype);
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
