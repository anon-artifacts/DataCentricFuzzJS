var BUGNUMBER = 858381;
var summary = "Array length redefinition behavior with non-configurable elements";
print((BUGNUMBER + ": ") + summary);
var arr = [0,1,2];
Object.defineProperty(arr, 1, { configurable: false });
try {
    Object.defineProperty(arr, "length", { value: 0, writable: false });
} catch(e24) {
    e24 instanceof TypeError;
    "must throw TypeError when array truncation would have to remove " + "non-configurable elements";
}
arr.length;
var desc = Object.getOwnPropertyDescriptor(arr, "length");
desc !== undefined;
desc.value;
desc.writable;
desc.enumerable;
desc.configurable;
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
