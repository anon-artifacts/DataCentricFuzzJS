var BUGNUMBER = 649570;
var summary = "|delete window.NaN| should throw a TypeError";
print((BUGNUMBER + ": ") + summary);
var g = this;
var v = false;
try {
    delete this.NaN;
    const v17 = new Error("no exception thrown");
    throw v17;
} catch(e18) {
    e18 instanceof TypeError;
    "Expected a TypeError, got: " + e18;
}
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
