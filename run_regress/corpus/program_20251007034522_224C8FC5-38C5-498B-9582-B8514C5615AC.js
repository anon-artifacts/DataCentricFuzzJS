var gTestfile = "preventExtensions-idempotent.js";
var BUGNUMBER = 599459;
var summary = "Object.preventExtensions should be idempotent";
print((BUGNUMBER + ": ") + summary);
var obj = {};
Object.preventExtensions(obj);
Object.isExtensible(obj);
Object.preventExtensions(obj);
Object.isExtensible(obj);
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("All tests passed!");
