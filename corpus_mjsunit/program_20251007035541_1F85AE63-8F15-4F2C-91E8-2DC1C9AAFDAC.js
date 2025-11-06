var BUGNUMBER = 1060873;
var summary = "Object.isExtensible() should return false when given primitive values as input";
print((BUGNUMBER + ": ") + summary);
Object.isExtensible();
Object.isExtensible(undefined);
Object.isExtensible(null);
Object.isExtensible(1);
Object.isExtensible("foo");
Object.isExtensible(true);
if (typeof Symbol === "function") {
    Object.isExtensible(Symbol());
}
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
