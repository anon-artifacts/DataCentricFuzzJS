var BUGNUMBER = 880591;
var summary = "Assertion redefining length property of a frozen dictionary-mode array";
print((BUGNUMBER + ": ") + summary);
function convertToDictionaryMode(a10) {
    Object.defineProperty(a10, 0, { configurable: true });
    Object.defineProperty(a10, 1, { configurable: true });
    delete a10[0];
}
var arr = [];
convertToDictionaryMode(arr);
Object.freeze(arr);
Object.defineProperty(arr, "length", {});
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
