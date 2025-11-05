var BUGNUMBER = 1247701;
var summary = "Array.prototype.shift on a dense array with holes should update for-in enumeration properties.";
print((BUGNUMBER + ": ") + summary);
var x = ["a",,"b",,"c","d","e","f","g"];
for (const v19 in x) {
    v19 in x;
    x.shift();
}
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
